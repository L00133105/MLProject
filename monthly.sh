#!/bin/sh
node keywordsAllScrape
echo "keywords Scraped"
node keywordsEntertainment
echo "Entertainment keywords scraped and counted"
node keywordsExplicit
echo "Explicit keywords scraped and counted"
node keywordsGambling
echo "Gambling keywords scraped and counted"
node keywordsMarketingPlatform
echo "Marketing Platform keywords scraped and counted"
node keywordsSport
echo "Sport keywords scraped and counted"
node keywordsTechnology
echo "Technology keywords scraped and counted"
node keywordsTravel
echo "Travel keywords scraped and counted"
git add -u
git commit -m 'Monthly Script'
git push
echo "Pushed to GitHub"