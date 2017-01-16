/// <reference path="../../typings/index.d.ts" />

describe("Given a Stock Repo", function() {
    it("When I GetAll", function() {
        let repo = new superSimpleStocks.Data.stockRepository().getAll();
        let val1 = <superSimpleStocks.Domain.Stock>repo[0];
        let val5 = <superSimpleStocks.Domain.Stock>repo[4];
        expect(repo.length).toBe(5);
        expect(val1.symbol).toBe("TEA");
        expect(val5.symbol).toBe("JOE");
    });
    describe("and a stock symbol", function() {
        let stockSymbol:string = "GIN";
        it("When I getStock", function() {
            let stock = new superSimpleStocks.Data.stockRepository().getStock(stockSymbol);
            expect(stock.symbol).toBe("GIN");

        });
    });
});
