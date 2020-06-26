# ApiBooks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

It has a express.js server side configured to serve apis at : http://localhost:3000 ( subdirectory express-server) . Executed as : npm start on that subdirectory.

To execute teh angular web site run as : npm start ( or ng serve --proxy-config ./proxy.json).

This proyect includes :
auth guards on navbar 
Rgister is functional ( create a new register as: name: test5 ; email : test5@test; password: 12345)

Dexie is using to store new registered users ( functional) and books ( still in develpment).

Also inlcude httpClient module and calls to apis confugred at express.node.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
