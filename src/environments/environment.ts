// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    realtime: 'http://localhost:8000/realtime.php',
    failover: 'http://localhost:8000/failover.php',
    update: 'http://localhost:8000/update.php',
    debug: 'http://localhost:8000/info.json'
  },
  stops: {
    'Polacksbacken': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700572',
    },
    'Regements- vägen': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700021',
      ignore: [
        4, 12, 1, 101
      ],
    },
    'Lundellska skolan': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700218',
      directions: ['C', 'D'],
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
