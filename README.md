# Using D3.js version 4 with Angular 2

Simple example of creating a reusable D3 chart component.

![screenshot](angular2-d3v4.gif)

See http://keathmilligan.net/create-reusable-chart-components-with-angular-2-and-d3-js-version-4/ for more information about this example.

---
UPDATES: (b4youleap) 
Original commit - trying to adapt this approach to create a reusable map component... and then read data from an API.

12/30/2016 - I just learned that shared components can (at least enforced by cli) only be exposed via modules. This new version adds a shared module and exposes the components
via that module.

I've also reinstalled d3 using typings using the following commands:
`npm install d3 --save
npm install @types/d3 --save-dev`
---

This project was originally generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17. *It has been updated to use version 1.0.0-beta.24*

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

