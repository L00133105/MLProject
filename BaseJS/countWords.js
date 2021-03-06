var fs = require('fs');
var testString = fs.readFileSync('DataSports.txt').toString();
var commonWords = fs.readFileSync('commonWords.txt').toString().split("\r\n"); 
const OUTPUT_FILE = 'wordCount.json'
const trainedAlgorithm = 'trainAlg.json'
let formattedString = testString.toLowerCase().replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
let uniqueWords = [...new Set(formattedString.split(" "))];
let skipWords = new Set(commonWords);
let countArray=[];
uniqueWords.forEach((word) => {
  if (skipWords.has(word)) return
  if (word.length <=2) return
  //if (include.has(word))
  //if (word.length <=3 && !include.has(word)) return
  countArray.push({"word":word,"count":0});
});
countArray.forEach((wordToFind) => {
  wordToFind.count=(occurrences(formattedString,wordToFind.word,false));
});
countArray.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0));
console.log(countArray);
writeCount(countArray, OUTPUT_FILE)
//trainingJSON(countArray, trainedAlgorithm)
function occurrences(string, subString, allowOverlapping) {
    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);
    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
function writeCount(json, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
}



// const autoTrain = require('./wordCount.json');
// autoTrain.forEach(item=>{
//   if(item.count >= 30){
//     item.text == item.word;
//     'sports' == item.category;
//     //writeCount(item.word, trainAlg.json)
//     console.log(item.word, item.category);
//     //fs.writeFileSync(filePath, JSON.stringify(json, item.word, item.category))
//   }
// })



// function trainingJSON(json, filePath) {
//   autoTrain.forEach(item=>{
//     if(item.count >= 30){
//       item.text == item.word;
//       item.category == "sports";
//       //writeCount(item.word, trainAlg.json)
//       console.log(item.word + ": " + item.count);
//       //fs.writeFileSync(filePath, JSON.stringify(json, item.word, item.category))
//     }
// })
// }
