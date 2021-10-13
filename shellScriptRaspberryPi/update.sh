#!/bin/sh

# Log date
date >> /home/pi/build.log

# Update and build
cd /home/pi/bus/bus-schedule
output=`git pull`
echo $output >> /home/pi/build.log
echo $output | grep "up to date."
if [ $? -eq 1 ]; then
	npm run build >> /home/pi/build.log
fi
cd ../bus-schedule-cache-system
rm -rf cache/*
git pull
