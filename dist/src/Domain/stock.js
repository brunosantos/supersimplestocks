'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var superSimpleStocks;
(function (superSimpleStocks) {
    var Domain;
    (function (Domain) {
        var Stock = (function () {
            function Stock(symbol, parValue, lastDividend) {
                this.symbol = symbol;
                this.parValue = parValue;
                this.lastDividend = lastDividend;
            }
            return Stock;
        }());
        Domain.Stock = Stock;
        var PreferredStock = (function (_super) {
            __extends(PreferredStock, _super);
            function PreferredStock(symbol, parValue, lastDividend, fixedDividend) {
                var _this = _super.call(this, symbol, parValue, lastDividend) || this;
                _this.fixedDividend = fixedDividend;
                return _this;
            }
            return PreferredStock;
        }(Stock));
        Domain.PreferredStock = PreferredStock;
    })(Domain = superSimpleStocks.Domain || (superSimpleStocks.Domain = {}));
})(superSimpleStocks || (superSimpleStocks = {}));
