const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
var fs = require('fs');
var array = fs.readFileSync('URLS.txt').toString().split("\n");    
var natural = require('natural');
var classifier = new natural.BayesClassifier();
var gambling = fs.createWriteStream('categoryGambling.txt');
var explicit = fs.createWriteStream('categoryExplicit.txt');
var technology = fs.createWriteStream('categoryTechnology.txt');
var entertainment = fs.createWriteStream('categoryEntertainment.txt');
var sports = fs.createWriteStream('categorySports.txt');
var marketingplatform = fs.createWriteStream('categoryMarketingplatform.txt');
var travel = fs.createWriteStream('categoryTravel.txt');
const trainer = require('./trainAlg.json');
let formattedString = [];
//Train
trainer.forEach(item=>{
    classifier.addDocument(item.text, item.category);
})
classifier.train();

for(i in array) 
{
    (async () => {
        var url = array[i];
        const response = await axios.get(url)
          .then(res => res.data)
          .catch(err => console.log(err));
      
        const link = [];
      
        if (response) {
          const $ = cheerio.load(response);
      
          $('li, h3, h2').each((i, el) => 
          {
              link.push =($(el).text());
              //Apply and Predict
              if(classifier.classify(link) == "explicit"){
                  explicit.write(url + '\n');
              }
              else if(classifier.classify(link) == "gambling"){
                  gambling.write(url + '\n');
              }
              else if(classifier.classify(link) == "technology"){ 
                  technology.write(url + '\n');
              }
              else if(classifier.classify(link) == "entertainment"){ 
                  entertainment.write(url + '\n');
              }
              else if(classifier.classify(link) == "sports"){ 
                  sports.write(url + '\n');
              }
              else if(classifier.classify(link) == "marketingplatform"){ 
                  marketingplatform.write(url + '\n');
              }
              else if(classifier.classify(link) == "travel"){ 
                  travel.write(url + '\n');
              }
          });
        }
        //console.log(url);
      })();
}
