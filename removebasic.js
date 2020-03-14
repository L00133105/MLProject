// fs.readFile(FILE_LOCATION, function (err, data) {
//   if (err) throw err;
//   if(data.includes('search string')){
//    console.log(data)
//   }
// });

// require("fs").readFile("filename.ext", function(err, cont) {
//     if (err)
//         throw err;
//     console.log("String"+(cont.indexOf("search string")>-1 ? " " : " not ")+"found");
// });

// var fs = require('fs');
// var stream = fs.createReadStream('test.csv');
// var found = false;
// stream.on('data',function(d){
//   if(!found) found=!!('https://techradar.com'+d).match(content)
// });
// stream.on('error',function(err){
//     then(err, found);
// });
// stream.on('close',function(err){
//     then(err, found);
// });

// $file = file_get_contents("test.csv");
// if (!strpos($file, "https://techradar.com")) {
//     echo "String not found!";
// } else {
//     echo "String found!";
// }
// const fs = require('fs');
// fs.readFile('test.txt', function (err, data) {
//     if (err) throw err;
//     if(data.includes('https://techradar.com')){
//      console.log(data)
//     }
//   });

// var fs = require('fs');
// //var contents = fs.readFileSync('test.txt', 'utf8');
// var text = fs.readFileSync("test.csv").toString('utf-8')
// console.log(text);

// var fs = require('fs');
// var array = fs.readFileSync('techradar.txt').toString().split("\n");
// for(i in array){
// var el = array.find(a =>a.includes("https:"));
// }
// console.log(el)

const removeItems = require('remove-array-items')
var remove = require('unordered-array-remove')
var fs = require('fs');
var array = fs.readFileSync('techradar.txt').toString().split("\n");
var substr = 'https://www.techradar.com/';
for(i in array){
     if(array[i].includes(substr) < 1){
         console.log(array[i]);
         fs.writeFileSync('techradar.txt', newArray + '\n');
      }
}
//console.log(array);
//console.log(array);
//fs.appendFileSync('removing.txt', " " + array + '\n');

// var filteredArray = array.filter(item => item !== "https://global.techradar.com/es-us");
// fs.appendFileSync('techradar.txt', " " + filteredArray + '\n');
// for(i in array) {
//     if(array[i].includes("https://techradar.com")){

//     }
    
