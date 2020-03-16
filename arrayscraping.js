const request = require('request');
const cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var array = fs.readFileSync('URLS.txt').toString().split("\n");    
var wstream = fs.createWriteStream('test.txt');
for(i in array) 
{
    var url = array[i];
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            $('link, a').each((i, el) => 
            {
                var link = $(el).attr('href');
                wstream.write(link + '\n');
            });
        }
    });
}

            // if(link.includes(array[i] < 1)){
            //     console.log(link + "\n" + array[i] + "\n");
            // }
                            // if(_.includes(link, array[i], array[i])){
                //     //if(array[i].includes(array[i]) < 1){
                //         console.log("is it working");
                //         link=array[i]+link;
                //         console.log(array[i]);
                //     }
                //console.log(link);
                //wstream.write(link + '\n');
            // if(link.includes(url) < 1){
            //          console.log("is it working" + link);
            //          link=url+link;
            //          wstream.write(link + '\n');
            //  }