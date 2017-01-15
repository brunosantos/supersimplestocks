/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock symbol", function() {
    it("When I create a stock of type Common", function() {
        let simpleStock = new superSimpleStocks.Domain.Stock('TEA', superSimpleStocks.Domain.stockType.Common);
            expect(simpleStock.symbol).toBe('TEA');
            expect(simpleStock.type).toBe(superSimpleStocks.Domain.stockType.Common);
  });
    it("When I create a stock of type Preferred", function() {
        let simpleStock = new superSimpleStocks.Domain.Stock('GIN', superSimpleStocks.Domain.stockType.Preferred);
        expect(simpleStock.symbol).toBe('GIN');
        expect(simpleStock.type).toBe(superSimpleStocks.Domain.stockType.Preferred);
  });
});
