'use strict';

const chai = require('chai');
chai.use(require('@devo/hoity-chai'));

const hoity = require('../../..');
const ops = hoity.ops.async;
hoity.proto({all: true});

function operator(opname) {
  describe(opname, function() {
    const check = require(`./${opname}-check`);
    check(chai.expect, 'pipe', (x,...args) => x.pipe(ops[opname](...args)));
    check(chai.expect, 'method', (x,...args) => x[opname](...args));
  });
}

describe('Hoity async operator', function() {
  [ 
    'concat',
    'drop',
    'filter',
    'flat',
    'flatMap',
    'map',
    'zip',
    'reduce',
    'take',
    'find',
    'merge',

    'array',
    'at',
    'every',
    'first',
    'join',
    'last',
    'some',

    'forEach',
  ].map(operator);
});
