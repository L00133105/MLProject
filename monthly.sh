#!/bin/node
cd /home/pi/Documents/MLProject/
node keywordsAllScrape
echo 'keyWordsScraped'
node keywordsEntertainment
echo 'Scrape and Count Entertainment Keywords'
node keywordsExplicit
echo 'Scrape and Count Explicit Keywords'
node keywordsGambling
echo 'Scrape and Count Gambling Keywords'
node keywordsMarketingPlatform
echo 'Scrape and Count Marketing Platform Keywords'
node keywordsSport
echo 'Scrape and Count Sport Keywords'
node keywordsTechnology
echo 'Scrape and Count Technology Keywords'
node keywordsTravel
echo 'Scrape and Count Travel Keywords'