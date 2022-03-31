# Async Coding Challenge 1 - ChartJS

## Installation

```
$ npm install
```

## Start

```
$ nx serve
```

## Tasks

### Task 1

- Include the component with the selector `time-series` in the lazy load module of the `visualization` component, so that the ng2-chart is visible under the route `http://localhost:4200/visualization`.
- Replace type `any` in all classes with correct types, interfaces, or classes.

### Task 2

- Read the data from the JSON file `apps/challenge/src/assets/time-series-data.json` and display it in the chart of component with the selector `time-series` dynamically.
- What is wrong with the time stamp? Correct it dynamically in code and not in the raw data!

### Task 3

- Extend the application so that the time series data could also come from a REST API or other endpoints (Look a and b below). The user should be able to change its source at runtime. Attempts to ensure a high level of reusability and that other possible data sources can be easily integrated without having to make changes in many places in the code.
- (a) The first additional data source is located in `apps/challenge/src/app/shared/services/mock.service.ts`. You can use the service globally.
- (b) The second additional data source is located in `wird im nächsten commit eingefügt`

## Sources

### Ng2-Charts / ChartJS
https://www.npmjs.com/package/ng2-charts

### Help

Canvas declarations are sometimes a bit tricky in terms of rendering. Try using nested combinations of ngIf and async-pipes to suppress drawing as long as the time series do not flow into the component.

- [Design Pattern - Strategy](https://refactoring.guru/design-patterns/strategy)
- [Dependency Inversion](https://blog.logrocket.com/understanding-dependency-inversion-principle-typescript/)

