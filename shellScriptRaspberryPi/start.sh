cd bus/bus-schedule

git pull | grep "up to date."
if [ $? == 1]; then
	npm run build
fi


cd ../bus-schedule-cache-system
rm -rf cache/*
git pull

./start

chromium-browser --kiosk --force-device-scale-factor=1.75 http:localhost:4200