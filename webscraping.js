const request = require('request');
const cheerio = require('cheerio');
// Use Loop to cycle through .txt file for each URL :)
var url = 'https://www.techradar.com/';

request(url, (error, response, html) => {
    if(!error && response.statusCode==200){
        const $ = cheerio.load(html);
        const siteHeading = $('.site-heading');
        console.log(siteHeading.html());

        $('link').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(link);
        });
    }
});
