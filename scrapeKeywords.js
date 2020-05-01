const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var array = fs.readFileSync('URLS.txt').toString().split("\n");    
var wstream = fs.createWriteStream('test.txt');
for(i in array) 
{
    var url = array[i];
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                wstream.write(link + '\n');
            });
     }
    });
}