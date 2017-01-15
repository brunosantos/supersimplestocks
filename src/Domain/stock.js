'use strict';
var superSimpleStocks;
(function (superSimpleStocks) {
    var Domain;
    (function (Domain) {
        var CommonStock = (function () {
            function CommonStock(symbol, parValue, lastDividend) {
                this.symbol = symbol;
                this.parValue = parValue;
                this.lastDividend = lastDividend;
            }
            return CommonStock;
        }());
        Domain.CommonStock = CommonStock;
        var PreferredStock = (function () {
            function PreferredStock(symbol, parValue, fixedDividend) {
                this.symbol = symbol;
                this.parValue = parValue;
                this.fixedDividend = fixedDividend;
            }
            return PreferredStock;
        }());
        Domain.PreferredStock = PreferredStock;
    })(Domain = superSimpleStocks.Domain || (superSimpleStocks.Domain = {}));
})(superSimpleStocks || (superSimpleStocks = {}));
