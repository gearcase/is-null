'use strict';

var expect = require('chai').expect;


describe('is-null', function () {

  var isNull = require('../../');

  it('common test', function () {
    expect(isNull(null)).to.be.true;

    expect(isNull(void 0)).to.be.false;
    expect(isNull('abc')).to.be.false;
    expect(isNull(123)).to.be.false;
    expect(isNull(true)).to.be.false;
    expect(isNull({})).to.be.false;
    expect(isNull([])).to.be.false;
    expect(isNull(NaN)).to.be.false;
  });
});
