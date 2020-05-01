const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('sitesGambling.txt').toString().split("\n");
for(i in array) 
{
    var url = array[i];
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            var wstream = fs.createWriteStream('DataGambling.txt');
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
const OUTPUT_FILE = 'wordsGambling.json'
var testString = fs.readFileSync('DataGambling.txt').toString();
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
          wordToFind.count=(occurrences(formattedString,wordToFind.word,false));
        });
        countArray.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0));
        console.log(countArray);
        writeCount(countArray, OUTPUT_FILE)
        function occurrences(string, subString, allowOverlapping) {
            string += "";
            subString += "";
            if (subString.length <= 0) return (string.length + 1);
            var n = 0,
                pos = 0,
                step = allowOverlapping ? 1 : subString.length;
            while (true) {
                pos = string.indexOf(subString, pos);
                if (pos >= 0) {
                    ++n;
                    pos += step;
                } else break;
            }
            return n;
        }
        function writeCount(json, filePath) {
          fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
        }