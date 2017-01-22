/// <reference path="../../typings/index.d.ts" />
//iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price

describe("Given a Stock symbol", function() {
    let stockSymbol = "TEA";
    
    describe("and a timestamp", function() {
        let timeStamp = new Date(2017, 1, 17, 9, 24, 0);
        describe("and quantity of shares of 14", function() {
            let quantity=14;
            describe("and a price of 156", function() {
                let price = 156;
                describe("and tradeType of Buy", function() {
                    let tradeType = Domain.TradeType.Buy;
                    describe("When I Save a Trade", function() {    
                        let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,tradeType,price);   
                        it("it should store that Trade", function() { 
                            let tradeRepo = new Data.TradeRepository();
                            tradeRepo.Save(trade);
                            
                            expect(tradeRepo.Contains(trade)).toBe(true);
                        });
                        describe("And then Save another Trade", function() {    
                            let trade2 = new Domain.Trade("GIN",new Date(2017, 1, 15, 9, 24, 0),10,Domain.TradeType.Sell,342);   
                            it("it should store both Trades", function() { 
                                let tradeRepo = new Data.TradeRepository();
                                tradeRepo.Save(trade);
                                tradeRepo.Save(trade2);
                                
                                expect(tradeRepo.Contains(trade)).toBe(true);
                                expect(tradeRepo.Contains(trade2)).toBe(true);
                            });
                        });
                    });
                });
            });
        });
    });
});
