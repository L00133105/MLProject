const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('sitesMarketingPlatform.txt').toString().split("\n");
for(i in array) 
{
    var url = array[i];
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            var wstream = fs.createWriteStream('DataMarketingPlatform.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                wstream.write(link + '\n');
            });
     }
    });
}
var commonWords = fs.readFileSync('commonWords.txt').toString().split("\r\n"); 
const OUTPUT_FILE = 'wordsMarketingPlatform.json'
var testString = fs.readFileSync('DataMarketingPlatform.txt').toString();
let formattedString = testString.toLowerCase().replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
let uniqueWords = [...new Set(formattedString.split(" "))];
let skipWords = new Set(commonWords);
let countArray=[];
        uniqueWords.forEach((word) => {
          if (skipWords.has(word)) return
          if (word.length <=2) return
          //if (include.has(word))
          //if (word.length <=3 && !include.has(word)) return
          countArray.push({"word":word,"count":0});
        });
        countArray.forEach((wordToFind) => {
          wordToFind.count=(noOfOccurrences(formattedString,wordToFind.word,false));
        });
        countArray.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0));
        console.log(countArray);
        writeCount(countArray, OUTPUT_FILE)
        function noOfOccurrences(word, letter, letterOverlap) {
          word += "";
          letter += "";
            if (letter.length <= 0) return (word.length + 1);
            var i = 0,
                position = 0,
                move = letterOverlap ? 1 : letter.length;
            while (true) {
              position = word.indexOf(letter, position);
                if (position >= 0) {
                    ++i;
                    position += move;
                } else break;
            }
            return i;
        }
        function writeCount(json, filePath) {
          fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
        }
        const autoTrain = require('./wordsMarketingPlatform.json');
        trainedPath = 'wordsMarketingPlatform.json'
        let addWords=[];
                autoTrain.forEach((item) => {
                  if (item.count >= 30)
                  addWords.push({"text":item.word,"category":"marketingPlatform"});
                });
                console.log(addWords);
                writeCount(addWords, trainedPath)