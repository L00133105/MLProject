var fs = require('fs');
var testString = fs.readFileSync('test.txt').toString();
var wstream = fs.createWriteStream('odhran.txt');
//console.log(occurrences(myStr)

let formattedString = testString.toLowerCase().replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
let uniqueWords = [...new Set(formattedString.split(" "))];
let countArray=[];
uniqueWords.forEach((word) => {
  countArray.push({word,"count":0});
  //wstream.write(countArray.push({word:" ", "count":0}));
});
countArray.forEach((wordToFind) => {
  wordToFind.count=(occurrences(formattedString,wordToFind.word,false));
});
countArray.sort((a,b) => (b > a) ? 1 : ((a > b) ? -1 : 0));
console.log(countArray);
//wstream.write(countArray);

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