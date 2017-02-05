
describe("Given all GBCE stocks", function() {
    let tea = new Domain.Stock('TEA', 0, 100);
    let pop = new Domain.Stock('POP', 8, 100);
    let ale = new Domain.Stock('ALE', 23, 100);
    let gin = new Domain.PreferredStock('GIN', 8, 0.02, 250);
    let joe = new Domain.Stock('JOE', 13, 250);
    describe("When I Save one stock to the StockRepository", function() {        
        it("the count should be 1", function() {            
            let stockRepo = new Data.StockRepository();
            expect(stockRepo.Count()).toBe(0);
            stockRepo.Save(pop);
            expect(stockRepo.Count()).toBe(1);
        });
    });    
    describe("When I Save all GBCE stocks to the StockRepository", function() {        
        let stockRepo = new Data.StockRepository();
        stockRepo.Save(tea);
        stockRepo.Save(pop);
        stockRepo.Save(ale);
        stockRepo.Save(gin);
        stockRepo.Save(joe);
        it("the count should be 5", function() {
            expect(stockRepo.Count()).toBe(5);
        });
    });
});
