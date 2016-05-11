"use strict";

const SandGrain = require('sand-grain');
const intercom = require('intercom.io');

class Intercom extends SandGrain {
  constructor() {
    super();

    this.defaultConfig = require('./default');
    this.version = require('../package.json').version;

    this.intercom = null;
  }

  init(config, done) {
    super.init(config);

    this.intercom = new intercom(this.config);

    done();
  }
}

module.exports = Intercom;