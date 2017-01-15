'use strict';
var superSimpleStocks;
(function (superSimpleStocks) {
    var Domain;
    (function (Domain) {
        var Stock = (function () {
            function Stock(symbol, type) {
                this.symbol = symbol;
                this.type = type;
            }
            return Stock;
        }());
        Domain.Stock = Stock;
        var stockType;
        (function (stockType) {
            stockType[stockType["Common"] = 1] = "Common";
            stockType[stockType["Preferred"] = 2] = "Preferred";
        })(stockType = Domain.stockType || (Domain.stockType = {}));
    })(Domain = superSimpleStocks.Domain || (superSimpleStocks.Domain = {}));
})(superSimpleStocks || (superSimpleStocks = {}));
