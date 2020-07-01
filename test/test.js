'use strict';

require('chai').should();

const queens = require('../queens/queens.js');

describe('Queens', function () {

  it('should compute solutions for "n" queens', function () {
    queens(0).should.equal(0);
    queens(1).should.equal(1);
    queens(2).should.equal(0);
    queens(3).should.equal(0);
    queens(4).should.equal(2);
    queens(5).should.equal(10);
    queens(6).should.equal(4);
    queens(7).should.equal(40);
    queens(8).should.equal(92);
    queens(9).should.equal(352);
    queens(10).should.equal(724);
  });

});
