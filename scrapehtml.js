const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('cnn.csv');
const SCRAPING_URL = 'https://skybet.com/';


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
      writeStream.write(`${results} /n`);
    });
  }
  console.log(results);
})();