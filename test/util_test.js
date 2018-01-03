var assert = require('assert');
var util = require('../lib/util');

describe('test ', function (  ) {
    describe('util', function (  ) {

        it('getArray', function (  ) {

            var def = 10;

            var arr = util.getArray();
            console.log(arr);

            // var max = Math.max.apply(null, arr);

            assert.equal(arr.length, def);
        })
    })
})