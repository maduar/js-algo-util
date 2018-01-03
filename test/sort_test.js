var assert = require('assert');
var Util = require('../lib/util');
var Sort = require('../lib/sort');

describe('test_sort ', function (  ) {
    describe('sort', function (  ) {

        it('quickSort', function (  ) {

            var def = 10;

            var arr = Util.getArray();
            console.log(arr);

            var arr2 = Sort.quickSort(arr);
            console.log(arr2);



            var sign = arr2[0] < arr2[def - 1];
            assert(sign);

        })
    })
})