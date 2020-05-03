
// autoTrain.forEach(item=>{
//   if(item.count >= 30){
//     item.text == item.word;
//     'sports' == item.category;
//     //writeCount(item.word, trainAlg.json)
//     console.log(item.word, item.category);
//     //fs.writeFileSync(filePath, JSON.stringify(json, item.word, item.category))
//   }
// })
var fs = require('fs');
function writeCount(json, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
}
const autoTrain = require('./wordCount.json');
OUTPUT_FILE = 'trainingKeywords.json'
let countArray=[];
        autoTrain.forEach((item) => {
          if (item.count >= 30)
          countArray.push({"item":item.word,"category":"technology"});
        });
        console.log(countArray);
        writeCount(countArray, OUTPUT_FILE)