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

Include the component with the selector `time-series` in the lazy load module of the `visualization` component, so that the ng2-chart is visible under the route `http://localhost:4200/visualization`

### Task 2

Read the data from the JSON file `apps/challenge/src/app/shared/time-series-data/data.json` and display it in the chart of component with the selector `time-series` dynamically.

### Task 3

Extend the application so that the time series data could also come from a REST API or other endpoints. The user should be able to change its source at runtime

## Sources

### ChartJS
https://www.chartjs.org/docs/latest/samples/line/line.html

### Help
- [Design Pattern - Strategy](https://refactoring.guru/design-patterns/strategy)
- [Dependency Inversion](https://blog.logrocket.com/understanding-dependency-inversion-principle-typescript/)

