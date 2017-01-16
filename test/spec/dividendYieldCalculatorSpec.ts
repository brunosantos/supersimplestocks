/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock symbol of type Common", function() {
    let simpleStock = new superSimpleStocks.Domain.Stock('TEA', 8, 100);
    describe("and a market price as input", function() {
        let marketPrice = 23.30;
        it("When I calculate the dividend yield", function() {            
            let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
            expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(0.04291845493562232);
        });
    });
});

// describe("Given a Stock symbol of type Preferred", function() {
//     let simpleStock = new superSimpleStocks.Domain.PreferredStock('TEA', 8, 100, 2);
//     describe("and a market price as input", function() {
//         let marketPrice = 67.10;
//         it("When I calculate the dividend yield", function() {            
//             let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
//             expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(0);
//         });
//     });
// });