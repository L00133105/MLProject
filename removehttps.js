var fs = require('fs');
var array = fs.readFileSync('bigtest.txt').toString().split("\n");
var urlextend1 = 'https://';
var urlextend2 = 'http://';
var wstream = fs.createWriteStream('httpsadded.txt'); 
var substr = 'https://www.techradar.com/';
for(i in array){
     if(array[i].includes(urlextend1) > -1 && array[i].includes(urlextend2) > -1){
         //console.log(array[i]);
         var update = array[i].replace("https://www.", "");
         var update1 = update.replace("http://www.", "");
         var update2 = update1.replace("https://", "");
         var update3 = update2.replace("http://", "");
         var update4 = update3.replace("//", "");
         //console.log(update4);
         //Filtering URLs to only include Domains: to links
    }
    wstream.write(update4 + '\n');
}

