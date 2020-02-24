const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Link \n`);

<<<<<<< HEAD
request('https://ads-blocker.com/testing/', (error, response, html) => {
=======
request('https://www.muthead.com/', (error, response, html) => {
>>>>>>> 132a8c099ef38b4d082ec457f510bea35dc21d7e
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.post-preview').each((i, el) => {
      const link = $(el)
        .find('a')
        .attr('href');
<<<<<<< HEAD
      const date = $(el)
        .find('.post-date')
        .text()
        .replace(/,/, '');
=======

>>>>>>> 132a8c099ef38b4d082ec457f510bea35dc21d7e
      // Write Row To CSV
      writeStream.write(`${link} \n`);
    });

    console.log('Scraping Done...');
  }
});