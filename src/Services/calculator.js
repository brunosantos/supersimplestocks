'use strict';
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
    class VWSPCalculator {
        constructor(tradeRepository) {
            this._tradeRepository = tradeRepository;
        }
        run(stockSymbol, tradeRange) {
            let trades = this._tradeRepository.GetWithinDateRange(tradeRange.startDate, tradeRange.endDate);
            let fundsTradedSum = 0;
            let quantitySum = 0;
            for (let trade of trades) {
                fundsTradedSum += trade.getFundsTraded();
                quantitySum += trade.quantity;
            }
            if (quantitySum < 1) {
                return 0;
            }
            return fundsTradedSum / quantitySum;
        }
    }
    Services.VWSPCalculator = VWSPCalculator;
})(Services || (Services = {}));
