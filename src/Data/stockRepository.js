'use strict';
var Data;
(function (Data) {
    class StockRepository {
        constructor() {
            this.data = new Map();
        }
        SaveStock(stock) {
        }
    }
    Data.StockRepository = StockRepository;
})(Data || (Data = {}));
