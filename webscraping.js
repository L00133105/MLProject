const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
// Use Loop to cycle through .txt file for each URL :)
 var url = "https://www.xvideos.com/";
 //var url ="https://www.google.com/search?source=hp&ei=3zBbXp3ZHNTQxgOs_pHYCQ&q=gamble&oq=gamble&gs_l=psy-ab.3..0l10.1538.2106..2289...0.0..0.49.239.6......0....1..gws-wiz.......0i131j0i10.yhTImwXIGZw&ved=0ahUKEwjdxPezr_jnAhVUqHEKHSx_BJsQ4dUDCAY&uact=5";
//var urls = 'urls.txt';
//var urlList =[];

request(url, (error, response, html) => {
    if(!error && response.statusCode==200){
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
        $('a, link').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(link);
            fs.appendFileSync('bothlinks.csv', " " + link + '\n');
        });
    }
});
