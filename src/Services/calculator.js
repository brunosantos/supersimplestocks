'use strict';
var Services;
(function (Services) {
    class DividendYieldCalculatorFactory {
        static create(stock) {
            if (PreferedDividendYieldCalculator.Handles(stock)) {
                return new PreferedDividendYieldCalculator();
            }
            return new CommonDividendYieldCalculator();
        }
    }
    Services.DividendYieldCalculatorFactory = DividendYieldCalculatorFactory;
    class DividendYieldCalculator {
        isValid(marketPrice) {
            return marketPrice > 0;
        }
        static Handles(stock) {
            return false;
        }
        run(stock, marketPrice) {
            if (!stock || !this.isValid(marketPrice)) {
                return 0;
            }
            return DividendYieldCalculatorFactory.create(stock).run(stock, marketPrice);
        }
    }
    Services.DividendYieldCalculator = DividendYieldCalculator;
    class CommonDividendYieldCalculator extends DividendYieldCalculator {
        static Handles(stock) {
            return !(stock instanceof Domain.PreferredStock);
        }
        run(stock, marketPrice) {
            return stock.lastDividend / marketPrice;
        }
    }
    class PreferedDividendYieldCalculator extends DividendYieldCalculator {
        static Handles(stock) {
            return stock instanceof Domain.PreferredStock;
        }
        run(stock, marketPrice) {
            if (!PreferedDividendYieldCalculator.Handles(stock)) {
                return 0;
            }
            return stock.fixedDividend * stock.parValue / marketPrice;
        }
    }
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
        run(stockSymbol, dateRange) {
            let trades = this._tradeRepository.GetWithinDateRange(stockSymbol, dateRange);
            let fundsTradedSum = 0;
            let quantitySum = 0;
            for (let trade of trades) {
                if (trade.type === Domain.TradeType.Buy) {
                    fundsTradedSum += trade.getFundsTraded();
                    quantitySum += trade.quantity;
                }
                else {
                    fundsTradedSum -= trade.getFundsTraded();
                    quantitySum -= trade.quantity;
                }
            }
            if (quantitySum < 1) {
                return 0;
            }
            return fundsTradedSum / quantitySum;
        }
    }
    Services.VWSPCalculator = VWSPCalculator;
})(Services || (Services = {}));
