/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock symbol", function() {
    it("When I create a stock of type Common", function() {
        let simpleStock = new superSimpleStocks.Domain.Stock('POP', 8, 100);
            expect(simpleStock.symbol).toBe('POP');
            expect(simpleStock.parValue).toBe(100);
            expect(simpleStock.lastDividend).toBe(8);
  });
    it("When I create a stock of type Preferred", function() {
        let simpleStock = new superSimpleStocks.Domain.PreferredStock('GIN', 8, 2, 200);
        expect(simpleStock.symbol).toBe('GIN');
        expect(simpleStock.parValue).toBe(200);
        expect(simpleStock.lastDividend).toBe(8);
        expect(simpleStock.fixedDividend).toBe(2);
  });
});
