module.exports = {
    getArray: function (len, max) {
        var DEFAULT_NUM = 10;

        var arrLenth = parseInt(len) > 1 ? parseInt(len) : DEFAULT_NUM;
        var maxNUM = parseInt(max) > 1 ? parseInt(max) : DEFAULT_NUM;

        var resultArray = [];
        var tempNumber = 0;

        for(var i = arrLenth; i > 0; i--) {
            tempNumber = Math.floor(Math.random() * i ) + 1 || 1;
            resultArray.push(tempNumber);
        }

        return resultArray;
    }
}
