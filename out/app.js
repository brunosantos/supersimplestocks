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
'use strict';
var Domain;
(function (Domain) {
    var TradeType;
    (function (TradeType) {
        TradeType[TradeType["Buy"] = 0] = "Buy";
        TradeType[TradeType["Sell"] = 1] = "Sell";
    })(TradeType = Domain.TradeType || (Domain.TradeType = {}));
    class Trade {
        constructor(stockSymbol, timeStamp, quantity, type, price) {
            this.stockSymbol = stockSymbol;
            this.timeStamp = timeStamp;
            this.quantity = quantity;
            this.type = type;
            this.price = price;
        }
    }
    Domain.Trade = Trade;
})(Domain || (Domain = {}));
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
})(Services || (Services = {}));
describe("Given a Stock symbol of type Common", function () {
    let simpleStock = new Domain.Stock('POP', 8, 100);
    describe("and a market price as input", function () {
        let marketPrice = 100;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0.08);
        });
    });
    describe("and a market price as input of -1", function () {
        let marketPrice = -1;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
    describe("and a market price as input of 0", function () {
        let marketPrice = 0;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
});
describe("Given a Stock symbol of type Preferred", function () {
    let simpleStock = new Domain.PreferredStock('TEA', 8, 100, 2);
    describe("and a market price as input", function () {
        let marketPrice = 115;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(1.7391304347826086);
        });
    });
    describe("and a market price as input of 0", function () {
        let marketPrice = 0;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
    describe("and a market price as input of -1", function () {
        let marketPrice = -1;
        it("When I calculate the dividend yield", function () {
            let dividendYieldCalculator = new Services.DividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
});
describe("Given a Stock symbol of type Common", function () {
    let simpleStock = new Domain.Stock('POP', 8, 100);
    describe("and a market price as input", function () {
        let marketPrice = 100;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(12.5);
        });
    });
    describe("and a market price as input of -1", function () {
        let marketPrice = -1;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
    describe("and a market price as input of 0", function () {
        let marketPrice = 0;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
});
describe("Given a Stock symbol of type Preferred", function () {
    let simpleStock = new Domain.PreferredStock('TEA', 8, 100, 2);
    describe("and a market price as input", function () {
        let marketPrice = 115;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(14.375);
        });
    });
    describe("and a market price as input of 0", function () {
        let marketPrice = 0;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
    describe("and a market price as input of -1", function () {
        let marketPrice = -1;
        it("When I calculate the P/E Ratio", function () {
            let dividendYieldCalculator = new Services.PERatioCalculator();
            expect(dividendYieldCalculator.run(simpleStock, marketPrice)).toBe(0);
        });
    });
});
describe("Given a Stock symbol", function () {
    it("When I create a stock of type Common", function () {
        let simpleStock = new Domain.Stock('POP', 8, 100);
        expect(simpleStock.symbol).toBe('POP');
        expect(simpleStock.parValue).toBe(100);
        expect(simpleStock.lastDividend).toBe(8);
    });
    it("When I create a stock of type Preferred", function () {
        let simpleStock = new Domain.PreferredStock('GIN', 8, 2, 200);
        expect(simpleStock.symbol).toBe('GIN');
        expect(simpleStock.parValue).toBe(200);
        expect(simpleStock.lastDividend).toBe(8);
        expect(simpleStock.fixedDividend).toBe(2);
    });
});
describe("Given a Stock symbol", function () {
    let stockSymbol = "TEA";
    describe("and a timestamp", function () {
        let timeStamp = new Date(2017, 1, 17, 9, 24, 0);
        describe("and quantity of shares of 14", function () {
            let quantity = 14;
            describe("and tradeType of Buy", function () {
                let tradeType = Domain.TradeType.Buy;
                it("When I Save", function () {
                    let tradeRepo = new Data.TradeRepository();
                    expect(1).toBe(1);
                });
            });
            describe("and tradeType of Sell", function () {
                let tradeType = Domain.TradeType.Sell;
                it("When I Save", function () {
                    let tradeRepo = new Data.TradeRepository();
                    expect(1).toBe(1);
                });
            });
        });
    });
});
//# sourceMappingURL=app.js.map