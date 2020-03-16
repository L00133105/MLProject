var fs = require('fs');
var array = fs.readFileSync('techradar.txt').toString().split("\n");
var urlextend1 = 'https:';
var urlextend2 = 'http:';
var wstream = fs.createWriteStream('httpsadded.txt');
//var substr = 'https://www.techradar.com/';
for(i in array){
     if(array[i].includes(urlextend1) < 1 && array[i].includes(urlextend2) < 1){
         //console.log(array[i]);
         array[i]="https:"+array[i];
         console.log(array[i])
         //Add HTTPS: to links
    }
    wstream.write(array[i] + '\n');
}
