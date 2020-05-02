const autoTrain = require('./wordCount.json');
autoTrain.forEach(item=>{
  if(item.count >= 30){
    item.text == item.word;
    'sports' == item.category;
    //writeCount(item.word, trainAlg.json)
    console.log(item.word, item.category);
    //fs.writeFileSync(filePath, JSON.stringify(json, item.word, item.category))
  }
})