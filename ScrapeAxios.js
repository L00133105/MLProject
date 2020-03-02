// const axios = require('axios');
// const cheerio = require('cheerio');
// const fs = require('fs');
// const writeStream = fs.createWriteStream('cnn.csv');
// const SCRAPING_URL = 'https://edition.cnn.com/';


// (async () => {
//   const response = await axios.get(SCRAPING_URL)
//     .then(res => res.data)
//     .catch(err => console.log(err));

//   const results = [];

//   if (response) {
//     const $ = cheerio.load(response);

//     $('html').each(function() {
//       results.push($(this).text());
//       // Write Row To CSV
//       writeStream.write(`${results} /n`);
//     });
//   }
//   console.log(results);
//   const getUrls = require('get-urls');
//   const text = $(results);
//   getUrls(text);
// })();

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://news.ycombinator.com/news", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('tr.athing:has(td.votelinks)').each(function( index ) {
    var title = $(this).find('td.title > a').text().trim();
    var link = $(this).find('td.title > a').attr('href');
    fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
  });

});