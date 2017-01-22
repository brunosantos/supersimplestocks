
describe("Given a Stock symbol and a timestamp and quantity and price and tradeType", function() {
    let stockSymbol = "TEA";
    let timeStamp = new Date(2017, 1, 17, 9, 24, 0);
    let quantity=14;
    let price = 156;
    let tradeType = Domain.TradeType.Buy;
    describe("When I create a Trade", function() {
        let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,tradeType,price);
        it("It should have a Stock symbol and a timestamp and quantity and price and tradeType", function() {            
            expect(trade.stockSymbol).toBe("TEA");
            expect(trade.timeStamp.toDateString).toBe(timeStamp.toDateString);
            expect(trade.quantity).toBe(14);
            expect(trade.price).toBe(156);
            expect(trade.type).toBe(Domain.TradeType.Buy);
        });
        describe("When I create an equal Trade and compare", function() {
            it("it should be equal", function() {
            let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,price,tradeType);
            let trade2 = new Domain.Trade(stockSymbol,timeStamp,quantity,price,tradeType);
            expect(trade.Equals(trade2)).toBe(true);
            });
        });
        describe("When I create a different Trade and compare", function() {
            it("it should be different", function() {
                let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,price,tradeType);
                let trade2 = new Domain.Trade(stockSymbol,timeStamp,3,price,tradeType);
                expect(trade.Equals(trade2)).toBe(false);
            });
        });
        describe("and I provide StartDate and EndDate inside the trade date When I call IsWithinDateRange", function() {
            let startDate = new Date(2017, 1, 17, 9, 20, 0);
            let endDate = new Date(2017, 1, 17, 9, 29, 0);
            let dateRange = new Domain.DateRange(startDate,endDate);
            it("it should be true", function() {
                expect(trade.IsWithinDateRange(dateRange)).toBe(true);
            });
        });
        describe("and I provide StartDate and EndDate outside the trade date When I call IsWithinDateRange", function() {
            let startDate = new Date(2017, 1, 17, 9, 10, 0);
            let endDate = new Date(2017, 1, 17, 9, 15, 0);
            let dateRange = new Domain.DateRange(startDate,endDate);
            it("it should be false", function() {
                expect(trade.IsWithinDateRange(dateRange)).toBe(false);
            });
        });
    });
});
