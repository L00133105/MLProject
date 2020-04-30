const request = require('request');
const cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
//var array = fs.readFileSync('URLs.txt').toString().split("\n");  
var array = fs.readFileSync('uncategorisedBlockList.txt').toString().split("\n"); 
//var array = fs.readFileSync('URLs.txt').toString().split("\n");   
var wstream = fs.createWriteStream('test.txt');
    // var url = "https://techradar.com/"; h3
    for(i in array) 
    {
     var ready = array[i];
     var url = ready.replace("0.0.0.0 ", "https://");
    //var url = "https://cnn.com/";
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                //var link = $(el).attr('');
                var link = $(el).text();
                //console.log(link);
                // for(i in link){
                //     if(link[i] == "\n"){
                //         link.slice(link[i], 1);
                //     }
                //     wstream.write(link[i]);
                //var update = link.replace("  ", "");
                //wstream.write(link+ " ");
                //console.log(link);
            });
        }
        else{
            wstream.write(url + "\n");
        }
    });
}

