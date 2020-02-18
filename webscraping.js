const request = require('request');
const cheerio = require('cheerio');

request('https://www.lyit.ie', (error, response, html) => {
    if(!error && response.statusCode==200){
        const $ = cheerio.load(html);

         const siteHeading = $('.site-heading');

         console.log(siteHeading.html());

        $('.nav-item a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(link);
        });
    }
});
