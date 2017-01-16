'use strict';
// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price
var superSimpleStocks;
(function (superSimpleStocks) {
    var Services;
    (function (Services) {
        //calculator factory.
        var dividendYieldCalculator = (function () {
            function dividendYieldCalculator() {
            }
            dividendYieldCalculator.prototype._toPennies = function (price) {
                return price * 100;
            };
            dividendYieldCalculator.prototype._toFullCurrency = function (price) {
                return price / 100;
            };
            dividendYieldCalculator.prototype.run = function (stock, marketPrice) {
                //stock instanceof Stock;
                return this._toFullCurrency(stock.lastDividend) / marketPrice;
            };
            return dividendYieldCalculator;
        }());
        Services.dividendYieldCalculator = dividendYieldCalculator;
    })(Services = superSimpleStocks.Services || (superSimpleStocks.Services = {}));
})(superSimpleStocks || (superSimpleStocks = {}));
