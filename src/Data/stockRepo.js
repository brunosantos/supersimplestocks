'use strict';
var superSimpleStocks;
(function (superSimpleStocks) {
    var Data;
    (function (Data) {
        var stockRepository = (function () {
            function stockRepository() {
                this._stockData = [new superSimpleStocks.Domain.Stock('TEA', 0, 100),
                    new superSimpleStocks.Domain.Stock('POP', 8, 100),
                    new superSimpleStocks.Domain.Stock('ALE', 23, 60),
                    new superSimpleStocks.Domain.PreferredStock('GIN', 8, 100, 2),
                    new superSimpleStocks.Domain.Stock('JOE', 13, 250)
                ];
            }
            stockRepository.prototype.getAll = function () {
                // let list: Array<superSimpleStocks.Domain.Stock> = [1, 2, 3];
                return this._stockData;
            };
            stockRepository.prototype.getStock = function (symbol) {
                return this._stockData[1]; //.find(this._hasSymbol);            
            };
            stockRepository.prototype._hasSymbol = function (stock, index, array) {
                return stock.symbol === '';
            };
            return stockRepository;
        }());
        Data.stockRepository = stockRepository;
    })(Data = superSimpleStocks.Data || (superSimpleStocks.Data = {}));
})(superSimpleStocks || (superSimpleStocks = {}));
