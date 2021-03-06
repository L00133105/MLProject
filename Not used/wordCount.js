const fs = require('fs');
const INPUT_FILE = 'test.txt'
const OUTPUT_FILE = 'wordCount.json'
const skipWords = new Set(['a', 'is', 'of', 'the'])

const inputString = fs.readFileSync(INPUT_FILE).toString();
const wordCountObj = countWords(inputString)
const sortedWordArr = sortWordsAlphabetically(wordCountObj)
writeCount(sortedWordArr, OUTPUT_FILE)

function countWords(str) {
  // Take a string of text and returns a dictionary
  const count = {}
  str.toLowerCase().split(' ').forEach(word => {
    // strip punctuation (todo: add more stripping)
    word = word.replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
    if (skipWords.has(word)) return
    if (count[word]) count[word]++
    else count[word] = 1
  })
  return count;
}

function sortWordsAlphabetically(countObj) {
  // takes a dictionary and returns an alphabetically sorted array of key-value pairs
  // { sam: 10, jim: 5 } => [{word: 'jim', count: 5}, {word: 'sam', count: 10}]
  return Object.keys(countObj)
    .sort((wordA, wordB) => wordA.localeCompare(wordB))
    .map(word => ({ word, count: countObj[word]}))
}
//   return Object.keys(countObj)
//   .sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0));
//     // .map(word => ({ word, count: countObj[word]}))
// }

function writeCount(json, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
}

const autoTrain = require('../wordCount.json');
autoTrain.forEach(item=>{
    if(item.count >= 10){
      console.log(item.word + ": " + item.count);
    }
})