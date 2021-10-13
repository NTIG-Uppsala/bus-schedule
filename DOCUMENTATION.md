# Documentation
## To install all needed libraries and software
1. npm install
1. sudo apt install php7.4 fonts-roboto
1. To run tests you will also need a chromuium-based browser.

## To run the application
1. Make sure the cache server is up and running, preferably on port 8000. (Otherwise you might need to edit [environment.ts](src/environments/environment.ts))
1. Start the webserver with `npm start`
1. Open a browser and head to [http://localhost:4200](http://localhost:4200)

## Running tests
1. Make sure the cache server is up and running, preferably on port 8000. (Otherwise you might need to edit [environment.ts](src/environments/environment.ts))
1. Make sure to run `npm start` in a different terminal
1. Run the tests:
    * `npm test` to run unit tests
    * `npm run e2e` to run end-to-end tests
 

## Configuring the webserver/changing bus stops
1. Most webserver settings can be found in [environments.ts](src/environments/environment.ts)
1. Bus stops can be changed under the `stops` key
    * `url` key is a UL stop ID
    * `ignore` is a list of bus numbers to ignore at that bus stop
    * `bus_count` is a number representing the number of buses to show. (In both directions)
1. If you do change the port of the cache server, make sure to edit the values under the `endpoints` key

## Writing tests
1. Unit tests are saved in the components `.spec.ts` file
    * This means that the `Dashboard` component will have its unit tests in the file `dashboard.component.spec.ts`
2. End-to-end tests are in the [e2e/src](e2e/src) directory.
