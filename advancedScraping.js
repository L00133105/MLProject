const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');
// Write Headers
writeStream.write(`Link \n`);
request('https://www.muthead.com/', (error, response, html) => 
{
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.post-preview').each((i, el) => {
      const link = $(el)
        .find('a')
        .attr('href');
      // Write Row To CSV
      writeStream.write(`${link} \n`);
    });

    console.log('Scraping Done...');
  }
});