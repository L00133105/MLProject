const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('baseURLs.txt').toString().split("\n");    
var wstream = fs.createWriteStream('updatedURLs.txt');

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
                var link = $(el).attr('href');
                wstream.write(link + '\n');
                console.log(link + "\n");
            });
        }
    });
}