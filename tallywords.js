function countWords(str) {
    const count = {}
    str.toLowerCase().split(' ').forEach(word => {
      // strip punctuation (todo: add more stripping)
      word = word.toLowerCase().replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
      if (count[word]) count[word]++
      else count[word] = 1
    })
     return(count);
  }
  var fs = require('fs');
  var myStr = fs.readFileSync('test.txt').toString();
  console.log(countWords(myStr));