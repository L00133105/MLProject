// const request = require('request');
// const cheerio = require('cheerio');
// var fs = require('fs');
// // Use Loop to cycle through .txt file for each URL :)
// var url = "http://techradar.com";

//     request(url, (error, response, html) => 
//     {
//         if(!error && response.statusCode==200)
//         {
//             const $ = cheerio.load(html);
//             $('link, a').each((i, el) => 
//             {
//                 const item = $(el).text();
//                 const link = $(el).attr('href');
//                 console.log(link);
//                 fs.appendFileSync('techradar.txt', link + '\n');
//             });
//         }
//     });


    //pubads.g.doubleclick.net
    const request = require('request');
    const cheerio = require('cheerio');
    var fs = require('fs');
    var array = fs.readFileSync('URLs.txt').toString().split("\n");
    // Use Loop to cycle through .txt file for each URL :)
    var url = "//pubads.g.doubleclick.net";
    
        request(url, (error, response, html) => 
        {
            if(!error && response.statusCode==200)
            {
                const $ = cheerio.load(html);
                $('html').each((i, el) => 
                {
                    const item = $(el).text();
                    const link = $(el).attr('html');
                    console.log(link);
 
                });
            }
        });