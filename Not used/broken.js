const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');
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
//Train
trainer.forEach(item=>{
    classifier.addDocument(item.text, item.category);
})
classifier.train();
ayns
for(i in array){
    var url = array[i];
const getWebsiteContent = async (url) => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    // New Lists
    $('li, h3, h2, body, div, html').text((i, el) => {
        var link = $(el).text();

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
    })
  } catch (error) {
    console.error(error)
  }
}
getWebsiteContent();
}
