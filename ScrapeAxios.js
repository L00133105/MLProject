const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('cnn.csv');
const SCRAPING_URL = 'https://edition.cnn.com/';


(async () => {
  const response = await axios.get(SCRAPING_URL)
    .then(res => res.data)
    .catch(err => console.log(err));

  const results = [];

  if (response) {
    const $ = cheerio.load(response);

    $('a').each(function() {
      results.push($(this).text());
      // Write Row To CSV
      writeStream.write(`${results} /n`);
    });
  }
  console.log(results);
})();