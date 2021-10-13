#!/bin/sh

cd bus/bus-schedule

git pull | grep "up to date."

cd ../bus-schedule-cache-system
rm -rf cache/*
echo "clear cache"
git pull
./start

cd ../bus-schedule
echo "loading website..."
chromium-browser --kiosk --force-device-scale-factor=1.75 http:localhost:4200