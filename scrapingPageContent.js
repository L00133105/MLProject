const request = require('request');
const cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var array = fs.readFileSync('URLS.txt').toString().split("\n");    
var wstream = fs.createWriteStream('test.txt');
  
    // var url = "https://techradar.com/"; h3
    var url = "https://xvideos.com/";
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            $('li, h3, h2').each((i, el) => 
            {
                //var link = $(el).attr('');
                var link = $(el).text();
                //var update = link.replace("  ", "");
                //wstream.write(link+ " ");
                console.log(link);
            });
        }
    });