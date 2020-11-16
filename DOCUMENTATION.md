# Documentation
## To install all needed libraries and software
1. npm install
1. sudo apt install php7.4

## To run the application
1. Make sure the cache server is up and running, preferably on port 8000. (Otherwise you might need to edit `environment.ts`)
1. Start the webserver with npm start
1. Open a browser and head to [http://localhost:4200](http://localhost:4200)

## Running tests
1. Make sure the cache server is up and running, preferably on port 8000. (Otherwise you might need to edit `environment.ts`)
1. Run the tests
1. `npm test` to run unit tests
1. `npm e2e` to run end-to-end tests


## Configuring the webserver/changing bus stops
1. Most webserver settings can be found in (src/environments/environment.ts)[environments.ts]
1. Bus stops can be changed under the `stops` key
  * `url` key is a UL stop ID
  * `ignore` is a list of bus numbers to ignore on that stop
  * `bus_count` is a number representing the number of buses to show. (In both directions)
1. If you do change the port of the cache server, make sure to edit the values under the `endpoints` key
