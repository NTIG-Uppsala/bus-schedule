cd bus/bus-schedule
git pull | grep "up to date."
if [ $? == 1 ]; then
    npm run build
fi

cd ../bus-schedule-cache-system
git pull

cd ..
