/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock symbol of type Common", function() {
    let simpleStock = new superSimpleStocks.Domain.Stock('POP', 8, 100);
    describe("and a market price as input", function() {
        let marketPrice = 100;
        it("When I calculate the dividend yield", function() {            
            let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(0.0008);
        });
    });
});

describe("Given a Stock symbol of type Common", function() {
    let simpleStock = new superSimpleStocks.Domain.Stock('TEA', 0, 100);
    describe("and a market price as input", function() {
        let marketPrice = 100;
        it("When I calculate the dividend yield", function() {            
            let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(0);
        });
    });
});

describe("Given a Stock symbol of type Preferred", function() {
    let simpleStock = new superSimpleStocks.Domain.PreferredStock('TEA', 8, 100, 2);
    describe("and a market price as input", function() {
        let marketPrice = 115;
        it("When I calculate the dividend yield", function() {            
            let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(0.0006956521739130435);
        });
    });
});