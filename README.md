# sand-intercom
An [intercom](https://intercom.io) sand grain. This module is a wrapper for [intercom.io](https://github.com/tarunc/intercom.io).

## Installation
`npm install sand-intercom`

## Usage
Add intercom to your sand config

```js
const sand = require('sand');
const intercom = require('intercom');

new sand()
    .use(intercom)
    .start();
```

A list of configuration values can be found below

### Configuration Options

Options are passed directly to the underlying `intercom.io` module.

See [intercom.io docs](https://github.com/tarunc/intercom.io) for available options.

## Functions

`sand-intercom` exposes an instance of the `intercom.io` module for interacting with the intercom.io API.

```js
let users = yield sand.intercom.intercom.getUsers();
```

See [intercom.io docs](https://github.com/tarunc/intercom.io) for available functions.
