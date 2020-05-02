const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var gamblingArray = fs.readFileSync('sitesGambling.txt').toString().split("\n");
var ExplicitArray = fs.readFileSync('sitesExplicit.txt').toString().split("\n");
var EntertainmentArray = fs.readFileSync('sitesEntertainment.txt').toString().split("\n");
var MarketingPlatformArray = fs.readFileSync('sitesMarketingPlatform.txt').toString().split("\n");
var SportsArray = fs.readFileSync('sitesSport.txt').toString().split("\n");
var TechnologyArray = fs.readFileSync('sitesTechnology.txt').toString().split("\n");
var TravelArray = fs.readFileSync('sitesTravel.txt').toString().split("\n");
for(i in gamblingArray) 
{
    var url = gamblingArray[i];
    var gamblingW = fs.createWriteStream('DataGambling.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                gamblingW.write(link + '\n');
            });
     }
    });
}
var ExplicitArray = fs.readFileSync('sitesExplicit.txt').toString().split("\n");
for(i in ExplicitArray) 
{
    var url = ExplicitArray[i];
    var explicitW = fs.createWriteStream('DataExplicit.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                explicitW.write(link + '\n');
            });
     }
    });
}
var EntertainmentArray = fs.readFileSync('sitesEntertainment.txt').toString().split("\n");
for(i in EntertainmentArray) 
{
    var url = EntertainmentArray[i];
    var entertainmentW = fs.createWriteStream('DataEntertainment.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                entertainmentW.write(link + '\n');
            });
     }
    });
}
var MarketingPlatformArray = fs.readFileSync('sitesMarketingPlatform.txt').toString().split("\n");
for(i in MarketingPlatformArray) 
{
    var url = MarketingPlatformArray[i];
    var marketingplatformW = fs.createWriteStream('DataMarketingPlatform.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                marketingplatformW.write(link + '\n');
            });
     }
    });
}
var SportsArray = fs.readFileSync('sitesSport.txt').toString().split("\n");
for(i in SportsArray) 
{
    var url = SportsArray[i];
    var sportsW = fs.createWriteStream('DataSports.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                sportsW.write(link + '\n');
            });
     }
    });
}
var TechnologyArray = fs.readFileSync('sitesTechnology.txt').toString().split("\n");
for(i in TechnologyArray) 
{
    var url = TechnologyArray[i];
    var technologyW = fs.createWriteStream('DataTechnology.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                technologyW.write(link + '\n');
            });
     }
    });
}
var TravelArray = fs.readFileSync('sitesTravel.txt').toString().split("\n");
for(i in TravelArray) 
{
    var url = TravelArray[i];
    var travelW = fs.createWriteStream('DataTravel.txt');
    request(url, (error, response, html) => 
    {
        if(!error && response.statusCode==200)
        {
            //var wstream = fs.createWriteStream('DataGambling.txt');
            const $ = cheerio.load(html);
            $('li, h3, h2, body, div, html').each((i, el) => 
            {
                var link = $(el).text();
                travelW.write(link + '\n');
            });
     }
    });
}

// var commonWords = fs.readFileSync('commonWords.txt').toString().split("\r\n"); 
// const OUTPUT_FILE = 'wordsGambling.json'
// let testString = link.toString();
// let formattedString = testString.toLowerCase().replace(/[^\w\s]/gi, '').replace(/(\r\n|\n|\r)/gm," ");
// let uniqueWords = [...new Set(formattedString.split(" "))];
// let skipWords = new Set(commonWords);
// let countArray=[];
//         uniqueWords.forEach((word) => {
//           if (skipWords.has(word)) return
//           if (word.length <=2) return
//           //if (include.has(word))
//           //if (word.length <=3 && !include.has(word)) return
//           countArray.push({"word":word,"count":0});
//         });
//         countArray.forEach((wordToFind) => {
//           wordToFind.count=(occurrences(formattedString,wordToFind.word,false));
//         });
//         countArray.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0));
//         console.log(countArray);
//         writeCount(countArray, OUTPUT_FILE)
//         function occurrences(string, subString, allowOverlapping) {
//             string += "";
//             subString += "";
//             if (subString.length <= 0) return (string.length + 1);
//             var n = 0,
//                 pos = 0,
//                 step = allowOverlapping ? 1 : subString.length;
//             while (true) {
//                 pos = string.indexOf(subString, pos);
//                 if (pos >= 0) {
//                     ++n;
//                     pos += step;
//                 } else break;
//             }
//             return n;
//         }
//         function writeCount(json, filePath) {
//           fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
//       }