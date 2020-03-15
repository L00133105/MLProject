const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
// Use Loop to cycle through .txt file for each URL :)
var url = "http://techradar.com";

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
                fs.appendFileSync('techradar.txt', " " + link + '\n');
            });
        }
    });