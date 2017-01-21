'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price
var Services;
(function (Services) {
    //calculator factory.
    var DividendYieldCalculator = (function () {
        function DividendYieldCalculator() {
        }
        DividendYieldCalculator.prototype.isValid = function (marketPrice) {
            return marketPrice > 0;
        };
        DividendYieldCalculator.prototype.run = function (stock, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            if (stock instanceof Domain.PreferredStock) {
                return CommonDividendYieldCalculator.run(stock, marketPrice);
            }
            return PreferedDividendYieldCalculator.run(stock, marketPrice);
        };
        return DividendYieldCalculator;
    }());
    Services.DividendYieldCalculator = DividendYieldCalculator;
    var PreferedDividendYieldCalculator = (function (_super) {
        __extends(PreferedDividendYieldCalculator, _super);
        function PreferedDividendYieldCalculator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreferedDividendYieldCalculator.run = function (stock, marketPrice) {
            return stock.lastDividend / marketPrice;
        };
        return PreferedDividendYieldCalculator;
    }(DividendYieldCalculator));
    Services.PreferedDividendYieldCalculator = PreferedDividendYieldCalculator;
    var CommonDividendYieldCalculator = (function (_super) {
        __extends(CommonDividendYieldCalculator, _super);
        function CommonDividendYieldCalculator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommonDividendYieldCalculator.run = function (stock, marketPrice) {
            return stock.fixedDividend * stock.parValue / marketPrice;
        };
        return CommonDividendYieldCalculator;
    }(DividendYieldCalculator));
    Services.CommonDividendYieldCalculator = CommonDividendYieldCalculator;
})(Services || (Services = {}));
