const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
// Use Loop to cycle through .txt file for each URL :)
//var url = "http://techradar.com";
////var urls = 'urls.txt';
// var urlList =[];
// var readline = require('linebyline'),
// r1 = readline('URLS.txt');
// r1.on('line', function(line, lineCount, byteCount){
    var array = fs.readFileSync('URLS.txt').toString().split("\n");
    for(i in array) 
    {
        var url = array[i];
        request(url, (error, response, html) => 
        {
            if(!error && response.statusCode==200)
            {
                const $ = cheerio.load(html);
                $('link, a').each((i, el) => 
                {   
                    const item = $(el).text();
                    const link = $(el).attr('href');
                    console.log(link);
                    fs.appendFileSync('test.txt', " " + link + '\n');
                });
            }
        });
    }
// })
// .on('error', function(e) {
//     // something went wrong
//     console.log("broken :)");
//   });
