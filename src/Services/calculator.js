'use strict';
// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price
var Services;
(function (Services) {
    //calculator factory.
    var dividendYieldCalculator = (function () {
        function dividendYieldCalculator() {
        }
        dividendYieldCalculator.prototype.toPennies = function (price) {
            return price * 100;
        };
        dividendYieldCalculator.prototype.toFullCurrency = function (price) {
            return price / 100;
        };
        dividendYieldCalculator.prototype.isValid = function (marketPrice) {
            return marketPrice > 0;
        };
        dividendYieldCalculator.prototype.run = function (stock, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            //stock instanceof Stock;
            return this.toFullCurrency(stock.lastDividend) / marketPrice;
        };
        return dividendYieldCalculator;
    }());
    Services.dividendYieldCalculator = dividendYieldCalculator;
})(Services || (Services = {}));
