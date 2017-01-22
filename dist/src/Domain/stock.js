'use strict';
var Domain;
(function (Domain) {
    class Stock {
        constructor(symbol, lastDividend, parValue) {
            this.symbol = symbol;
            this.lastDividend = lastDividend;
            this.parValue = parValue;
        }
    }
    Domain.Stock = Stock;
    class PreferredStock extends Stock {
        constructor(symbol, lastDividend, fixedDividend, parValue) {
            super(symbol, lastDividend, parValue);
            this.fixedDividend = fixedDividend;
        }
    }
    Domain.PreferredStock = PreferredStock;
})(Domain || (Domain = {}));
