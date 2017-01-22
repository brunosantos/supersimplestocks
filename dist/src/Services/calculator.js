'use strict';
// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price
var Services;
(function (Services) {
    class DividendYieldCalculator {
        isValid(marketPrice) {
            return marketPrice > 0;
        }
        run(stock, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            if (stock instanceof Domain.PreferredStock) {
                return CommonDividendYieldCalculator.run(stock, marketPrice);
            }
            return PreferedDividendYieldCalculator.run(stock, marketPrice);
        }
    }
    Services.DividendYieldCalculator = DividendYieldCalculator;
    class PreferedDividendYieldCalculator extends DividendYieldCalculator {
        static run(stock, marketPrice) {
            return stock.lastDividend / marketPrice;
        }
    }
    Services.PreferedDividendYieldCalculator = PreferedDividendYieldCalculator;
    class CommonDividendYieldCalculator extends DividendYieldCalculator {
        static run(stock, marketPrice) {
            return stock.fixedDividend * stock.parValue / marketPrice;
        }
    }
    Services.CommonDividendYieldCalculator = CommonDividendYieldCalculator;
    class PERatioCalculator {
        isValid(marketPrice) {
            return marketPrice > 0;
        }
        run(stock, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            return marketPrice / stock.lastDividend;
        }
    }
    Services.PERatioCalculator = PERatioCalculator;
})(Services || (Services = {}));
