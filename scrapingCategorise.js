const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('URLS.txt').toString().split("\n");    
var wstream = fs.createWriteStream('test.txt');
var natural = require('natural');
var classifier = new natural.BayesClassifier();
var gambling = fs.createWriteStream('gambling.txt');
var explicit = fs.createWriteStream('explicit.txt');
var technology = fs.createWriteStream('technology.txt');
var entertainment = fs.createWriteStream('entertainment.txt');
var sports = fs.createWriteStream('sports.txt');
var marketingplatform = fs.createWriteStream('marketingplatform.txt');
const trainer = require('./trainAlg.json');

//Train
trainer.forEach(item=>{
    classifier.addDocument(item.text, item.category);
})
classifier.train();

for(i in array) 
{
    var url = array[i];
                    // //Apply and Predict
                    // if(classifier.classify(array[i]) == "explicit"){
                    //     explicit.write(array[i]);
                    //  }
                    //  else if(classifier.classify(array[i]) == "gambling"){
                    //      gambling.write(array[i]);
                    //  }
                    //  else if(classifier.classify(array[i]) == "technology"){ 
                    //      technology.write(array[i]);
                    //  }
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                //Apply and Predict
                // if(classifier.classify(link) == "explicit"){
                //    explicit.write(url);
                // }
                // else if(classifier.classify(link) == "gambling"){
                //     gambling.write(url);
                // }
                // else if(classifier.classify(link) == "technology"){ 
                //     technology.write(url);
                // }
                // else if(classifier.classify(link) == "entertainment"){ 
                //     entertainment.write(url);
                // }
                // else if(classifier.classify(link) == "sports"){ 
                //     sports.write(url);
                // }
                // else if(classifier.classify(link) == "marketingplatform"){ 
                //     marketingplatform.write(url);
                // }
                url.forEach((reference) => {
                //Apply and Predict
                if(classifier.classify(link) == "explicit"){
                    explicit.write(url);
                 }
                 else if(classifier.classify(link) == "gambling"){
                     gambling.write(url);
                 }
                 else if(classifier.classify(link) == "technology"){ 
                     technology.write(url);
                 }
                 else if(classifier.classify(link) == "entertainment"){ 
                     entertainment.write(url);
                 }
                 else if(classifier.classify(link) == "sports"){ 
                     sports.write(url);
                 }
                 else if(classifier.classify(link) == "marketingplatform"){ 
                     marketingplatform.write(url);
                 }
                  });
            });
        }
    });
}