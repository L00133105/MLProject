const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('baseURLs.txt').toString().split("\n");     
var natural = require('natural');
var classifier = new natural.BayesClassifier();
var gambling = fs.createWriteStream('categoryGambling.txt');
var explicit = fs.createWriteStream('categoryExplicit.txt');
var technology = fs.createWriteStream('categoryTechnology.txt');
var entertainment = fs.createWriteStream('categoryEntertainment.txt');
var sports = fs.createWriteStream('categorySports.txt');
var marketingplatform = fs.createWriteStream('categoryMarketingplatform.txt');
var travel = fs.createWriteStream('categoryTravel.txt');
const trainEntertainment = require('./wordsEntertainment.json');
const trainExplicit = require('./wordsExplicit.json');
const trainGambling = require('./wordsGambling.json');
const trainMarketingPlatform = require('./wordsMarketingPlatform.json');
const trainSport = require('./wordsSport.json');
const trainTechnology = require('./wordsTechnology.json');
const trainTravel = require('./wordsTravel.json');
//Train
trainEntertainment.forEach(item=>{
    classifier.addDocument(item.text, item.category); })
 trainExplicit.forEach(item=>{
     classifier.addDocument(item.text, item.category); })
trainGambling.forEach(item=>{
    classifier.addDocument(item.text, item.category); })
trainMarketingPlatform.forEach(item=>{
    classifier.addDocument(item.text, item.category); })
trainSport.forEach(item=>{
    classifier.addDocument(item.text, item.category); })
trainTechnology.forEach(item=>{
    classifier.addDocument(item.text, item.category); })
trainTravel.forEach(item=>{
    classifier.addDocument(item.text, item.category); })   
 classifier.train();

for(i in array) 
{
    var url = array[i];
    var url = "https://www.primevideo.com/"
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
                console.log(classifier.classify(link), url);
                if(classifier.classify(link) == "gambling"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    gambling.write(filteredURL + '\n'); 
                    console.log(filteredURL + '\n');}
                else if(classifier.classify(link) == "marketingPlatform"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    console.log(filteredURL + '\n');
                    marketingplatform.write(filteredURL  + '\n'); }
                else if(classifier.classify(link) == "explicit"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    explicit.write(filteredURL  + '\n');
                    console.log(filteredURL + '\n');}
                else if(classifier.classify(link) == "technology"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    technology.write(filteredURL  + '\n'); 
                    console.log(filteredURL + '\n');}
                else if(classifier.classify(link) == "entertainment") {
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    entertainment.write(filteredURL  + '\n'); 
                    console.log(filteredURL + '\n');}
                else if(classifier.classify(link) == "sports"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    sports.write(filteredURL  + '\n'); 
                    console.log(filteredURL + '\n');}
                else if(classifier.classify(link) == "travel"){
                    var filteredURL = url.replace("https://www.", "0.0.0.0 ");
                    travel.write(filteredURL  + '\n');
                    console.log(filteredURL + '\n');}
                }
            //});
    });
}