# TTT challenge

A small web app made in Express, React(redux) and NodeJS as a challenge for job application of Software Engineer/Developer at Terribly Tiny Tales TTT.

[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge&style=flat)](https://ttt-challenge-avinash.herokuapp.com/)

## Table of Contents

- [TTT challenge](#ttt-challenge)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Dependencies](#dependencies)
  - [Frontend](#frontend)
    - [Actions](#actions)
    - [Components](#components)
    - [Reducers](#reducers)
  - [Backend](#backend)
    - [API Request](#api-request)
    - [API Response](#api-response)
  - [Tests](#tests)
  - [Credits](#credits)

## About

## Installation

If you use `npm`
>`npm install`

If you use `yarn`
>`yarn`

## Available Scripts

|Script| Command | Function |
|---|---|---|
| `start` | `npm start` | Runs the express server |
| `start-react` | `npm run start-react` | Serves Frontend only in hot-mode
| `build` | `npm build` | Compiles the frontend into static file in [build] directory
| `final` | `npm run final` | Builds the frontend and starts the express server.

## Dependencies

| Dependency | Purpose |
|---|---|
| axios | Access the api |
| express | Create the server |
| react | Frontend framework |
| react-dom | Frontend framework | |
| redux-thunk | Call api asynchronously in frontend |
| react-redux | Integrate `redux` with react |
| redux | State management in frontend |

## Frontend

Frontend is created using [React] and [Bootstrap] initialized by [create-react-app]

### Actions

Actions are in directory [actions]
|Action|Purpose|
|---|---|
|`changeN`| update the value of `n` in props.|
|`getWords` | fetch the top `n` words from api.|

### Components

Components are in directory [components]
|Component|Purpose|
|---|---|
|`App`| root app container |
| `Credits` | minimal footer |
| `Description` | Short description of the app |
| `Form` | Form to take user input of `n` |
| `WordList` | Table container for fetched top n words |

### Reducers

Reducers are in directory [reducers]
|Reducer|Purpose|
|---|---|
|`getWordsReducer`| get the top `n` words |
| `getNReducer` | get the value of `n` |

## Backend

### API Request

Only GET request at `/api/topn` is supported with parameter `n`
| Parameter |  Type | Default  | Use |
|---|---|---|---|
| `n` | Number | 5 | Get top `n` words in decreasing order of frequency count.

### API Response

JSON object is returned in format

```JSON
{"words": [{"name": "abc", "count": 5}, {"name": "xyz", "count": 3}]}
```

## Tests

Check [tests]

## Credits

[Avinash Thakur](https://www.linkedin.com/in/80avin/)

[build]: build
[React]: https://reactjs.org/
[Bootstrap]: https://getbootstrap.com/
[create-react-app]: https://github.com/facebook/create-react-app
[actions]: src/actions/
[components]: src/components
[reducers]: src/reducers
[tests]: docs/tests.md