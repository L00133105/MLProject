const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('cnn.csv');
const SCRAPING_URL = 'https://techradar.com/';

(async () => 
{
  const response = await axios.get(SCRAPING_URL)
    .then(res => res.data)
    .catch(err => console.log(err));
  const results = [];
  if (response) 
  {
    const $ = cheerio.load(response);
    $('html').each(function() 
    {
      results.push($(this).text());
      //writeStream.write(results);
    });
  }
  console.log(results);
})();

// const request = require('request');
// const cheerio = require('cheerio');
// var _ = require('lodash');
// var fs = require('fs');
// var array = fs.readFileSync('URLS.txt').toString().split("\n");    
// var wstream = fs.createWriteStream('test.txt');
// for(i in array) 
// {
//     var url = array[i];
//     request(url, (error, response, html) => 
//     {
//         if(!error && response.statusCode==200)
//         {
//             const $ = cheerio.load(html);
//             $('link, a').each((i, el) => 
//             {
//                 var link = $(el).attr('href');
//                 wstream.write(link + '\n');
//             });
//         }
//     });
// }