// const puppeteer = require('puppeteer');
// const $ = require('cheerio');
// const url = 'https://edition.cnn.com/';

// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage();
//   })
//   .then(function(page) {
//     return page.goto(url).then(function() {
//       return page.content();
//     });
//   })
//   .then(function(html) {
//     $('h2', html).each(function() {
//       console.log($(this).text());
//     });
//   })
//   .catch(function(err) {
//     //handle error
//   });

const puppeteer = require('puppeteer');
const fs = require('fs');
const writeStream = fs.createWriteStream('cnn.csv');
const url = 'https://edition.cnn.com/';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
      writeStream.write(`${results} /n`);
    });
  })
  .then(function(html) {
    console.log(html);
  })
  .catch(function(err) {
    //handle error
  });

// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require('fs');

// request("https://edition.cnn.com/", function(error, response, body) {
//   if(error) {
//     console.log("Error: " + error);
//   }
//   console.log("Status code: " + response.statusCode);

//   var $ = cheerio.load(body);

//   $('tr.athing:has(td.votelinks)').each(function( index ) {
//     var title = $(this).find('td.title > a').text().trim();
//     var link = $(this).find('td.title > a').attr('href');
//     fs.appendFileSync('cnn.txt', title + '\n' + link + '\n');
//   });

// });