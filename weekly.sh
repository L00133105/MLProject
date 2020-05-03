#!/bin/node
cd /home/pi/Documents/MLProject/
node urlscraping
echo 'Scrape URLs'
node removebasic
echo 'Remove duplicate URLs'
node remove https
echo 'Remove and filter URLs'
node scrapingCategorise
echo 'Scrape and Categorise URLs'