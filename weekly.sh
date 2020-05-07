#!/bin/sh
node urlscraping
echo "Scrape URLs"
node removeDuplicates
echo "Remove duplicate URLs"
node removeExtension
echo "Remove extensions and filter URLs"
node scrapingCategorise
echo "Scrape and Categorise URLs"
git add -u
git commit -m 'Weekly Script'
git push
echo "Pushed to GitHub"