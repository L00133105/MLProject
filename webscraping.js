const request = require('request');
const cheerio = require('cheerio');

// https://www.techradar.com/ WORKS
request('', (error, response, html) => {
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
