function countWords(str) {
    const count = {}
    str.toLowerCase().split(' ').forEach(word => {
      // strip punctuation (todo: add more stripping)
      word = word.replace(/('s|\?|\.|\!|\n)$/,'')
      if (count[word]) count[word]++
      else count[word] = 1
    })
     return(count);
  }
  var fs = require('fs');
  var myStr = fs.readFileSync('test.txt').toString();
  console.log(countWords(myStr.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0))));