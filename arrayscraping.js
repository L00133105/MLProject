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
            $('link, a').each((i, el) => 
            {   
                const link = $(el).attr('href');
                console.log(link);
                //fs.appendFileSync('test.txt', " " + link + '\n');
                wstream.write(link + '\n');
            });
        }
    });
}
