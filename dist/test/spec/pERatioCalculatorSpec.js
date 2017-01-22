/// <reference path="../../typings/index.d.ts" />
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
