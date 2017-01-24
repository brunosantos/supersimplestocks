'use strict';
var Services;
(function (Services) {
    class StockCalculatorService {
        constructor(stockRepository) {
            this.stockRepository = stockRepository;
        }
        isValid(marketPrice) {
            return marketPrice > 0;
        }
    }
    Services.StockCalculatorService = StockCalculatorService;
    class DividendYieldCalculatorService extends StockCalculatorService {
        run(stockSymbol, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            let stock = this.stockRepository.Get(stockSymbol);
            if (!stock) {
                return 0;
            }
            return new Services.DividendYieldCalculator().run(stock, marketPrice);
        }
    }
    Services.DividendYieldCalculatorService = DividendYieldCalculatorService;
    class PERatioCalculatorService extends StockCalculatorService {
        run(stockSymbol, marketPrice) {
            if (!this.isValid(marketPrice)) {
                return 0;
            }
            let stock = this.stockRepository.Get(stockSymbol);
            if (!stock) {
                return 0;
            }
            return new Services.PERatioCalculator().run(stock, marketPrice);
        }
    }
    Services.PERatioCalculatorService = PERatioCalculatorService;
    class VWSPCalculatorService {
        constructor(tradeRepository) {
            this._tradeRepository = tradeRepository;
        }
        run(stockSymbol, dateRange) {
            return new Services.VWSPCalculator(this._tradeRepository).run(stockSymbol, dateRange);
        }
    }
    Services.VWSPCalculatorService = VWSPCalculatorService;
})(Services || (Services = {}));
