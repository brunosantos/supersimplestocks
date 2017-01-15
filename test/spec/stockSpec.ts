/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock symbol", function() {
    it("When I create a stock of type Common", function() {
        let simpleStock = new superSimpleStocks.Domain.Stock('TEA', 8, 100);
            expect(simpleStock.symbol).toBe('TEA');
            expect(simpleStock.parValue).toBe(8);
            expect(simpleStock.lastDividend).toBe(100);
  });
    it("When I create a stock of type Preferred", function() {
        let simpleStock = new superSimpleStocks.Domain.PreferredStock('GIN', 8, 200, 2);
        expect(simpleStock.symbol).toBe('GIN');
        expect(simpleStock.parValue).toBe(8);
        expect(simpleStock.lastDividend).toBe(200);
        expect(simpleStock.fixedDividend).toBe(2);
  });
});
