'use strict';
var Data;
(function (Data) {
    class StockRepository {
        constructor() {
            this.stockData = new Map();
        }
        Save(stock) {
            this.stockData.set(stock.symbol, stock);
            return this;
        }
        Get(stockSymbol) {
            return this.stockData.get(stockSymbol);
        }
        Count() {
            return this.stockData.size;
        }
    }
    Data.StockRepository = StockRepository;
})(Data || (Data = {}));
