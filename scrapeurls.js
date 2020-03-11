const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
// Use Loop to cycle through .txt file for each URL :)
var url = "http://techradar.com";
var urls = 'urls.txt';
var urlList =[];

request(url, (error, response, html) => 
{
    if(!error && response.statusCode==200)
    {
        const $ = cheerio.load(html);
        // for(var e=0; e<urls.length; e++){
        //     urlList.push(urls[e].href);
        //     $('link').each((i, el) => {
        //         const item = $(el).text();
        //         const link = $(el).attr('href');
        //         console.log(link);
        //         fs.appendFileSync('websiteurls.txt', " " + link + '\n');
        //     });
        // }
        // console.log(urlList);
        $('link, a').each((i, el) => 
        {
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(link);
            fs.appendFileSync('bothlinks.csv', " " + link + '\n');
        });
    }
});