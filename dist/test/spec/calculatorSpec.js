// /// <reference path="../../typings/index.d.ts" />
// describe("Given a Stock symbol of type Common", function() {
//     describe("and a market price as input", function() {
//         let marketPrice = 23;
//         it("When I calculate the dividend yield", function() {
//             let simpleStock = new superSimpleStocks.Domain.Stock('TEA', superSimpleStocks.Domain.stockType.Common);
//             let dividendYieldCalculator = new superSimpleStocks.Services.dividendYieldCalculator();
//                 expect(dividendYieldCalculator.run(lastDividend,marketPrice)).toBe(23);
//                 expect(simpleStock.type).toBe(superSimpleStocks.Domain.stockType.Common);
//         });
//     });
//     describe("Given a Stock symbol", function() {
//         it("When I create a stock of type Common", function() {
//             let simpleStock = new superSimpleStocks.Domain.Stock('TEA', superSimpleStocks.Domain.stockType.Common);
//                 expect(simpleStock.symbol).toBe('TEA');
//                 expect(simpleStock.type).toBe(superSimpleStocks.Domain.stockType.Common);
//         });
//     });
// });
