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