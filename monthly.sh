#!/bin/sh
node keywordsAllScrape
echo "keywords Scraped"
node /home/pi/Documents/MLProject/keywordsEntertainment
echo "Entertainment keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsExplicit
echo "Explicit keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsGambling
echo "Gambling keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsMarketingPlatform
echo "Marketing Platform keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsSport
echo "Sport keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsTechnology
echo "Technology keywords scraped and counted"
node /home/pi/Documents/MLProject/keywordsTravel
echo "Travel keywords scraped and counted"
git commit -m 'Monthly Script'
git push
echo "Pushed to GitHub"