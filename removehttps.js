var fs = require('fs');
var array = fs.readFileSync('testing.txt').toString().split("\n");
var urlextend1 = 'https://';
var urlextend2 = 'http://';
var wstream = fs.createWriteStream('httpsadded.txt'); 
for(i in array){
     if(array[i].includes(urlextend1) > -1 && array[i].includes(urlextend2) > -1){
         //console.log(array[i]);
         var update = array[i].replace("https://www.", "0.0.0.0 ");
         var update1 = update.replace("http://www.", "0.0.0.0 ");
         var update2 = update1.replace("https://", "0.0.0.0 ");
         var update3 = update2.replace("http://", "0.0.0.0 ");
         var update4 = update3.replace("//", "0.0.0.0 ");
         var update5 = update4.replace("0.0.0.0 ", "https://");
         //console.log(update4);
         //Filtering URLs to only include Domains: to links
    }
    wstream.write(update5 + '\n');
}

