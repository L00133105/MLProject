const request = require('request');
const cheerio = require('cheerio');
<<<<<<< HEAD
request('https://www.lyit.ie', (error, response, html) => {
=======

request('http://hdstreams.club/hd/ch1.php', (error, response, html) => {
>>>>>>> 132a8c099ef38b4d082ec457f510bea35dc21d7e
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
