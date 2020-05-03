const request = require('request');
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
let formattedString = [];
//Train
trainer.forEach(item=>{
    classifier.addDocument(item.text, item.category);
})
classifier.train();
for(i in array) 
{
    var url = array[i];
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            //$('li, h3, h2, body, div, html').each((i, el) => 
            //{
                var link = $('li, h3, h2, body, div, html').text();
                console.log(link);
                //Apply and Predict
                //console.log(classifier.classify(link));
                if(classifier.classify(link) == "explicit")
                    explicit.write(url + '\n');
                
                else if(classifier.classify(link) == "gambling")
                    gambling.write(url  + '\n');
                
                else if(classifier.classify(link) == "technology")
                    technology.write(url  + '\n');
                
                else if(classifier.classify(link) == "entertainment")
                    entertainment.write(url  + '\n');
                
                else if(classifier.classify(link) == "sports")
                    sports.write(url  + '\n');
                
                else if(classifier.classify(link) == "marketingplatform")
                    marketingplatform.write(url  + '\n');
                
                else if(classifier.classify(link) == "travel")
                    travel.write(url  + '\n');
                }
            //});
    });
}