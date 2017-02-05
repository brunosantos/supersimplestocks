
//iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price
'use strict'
import * as Data from "../../src/Data/data";
import * as Domain from "../../src/Domain/domain";


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

describe("Given a set of saved Trades and a startDate and EndDate", function() {    
    let trade1 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 0, 0),23,Domain.TradeType.Buy,453);
    let trade2 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 8, 0),23,Domain.TradeType.Buy,453);   
    let trade3 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 14, 0),23,Domain.TradeType.Buy,453);   
    let trade4 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 15, 0),23,Domain.TradeType.Buy,453);   
    let trade5 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 20, 0),23,Domain.TradeType.Buy,453);   
    let tradeRepo = new Data.TradeRepository();
    tradeRepo.Save(trade1);
    tradeRepo.Save(trade2);
    tradeRepo.Save(trade3);
    tradeRepo.Save(trade4);
    tradeRepo.Save(trade5);

    let dateRange = new Domain.DateRange(new Date(2017, 1, 15, 9, 8, 0),new Date(2017, 1, 15, 9, 16, 0));
    describe("When you GetWithinDateRange", function() {   
        it("it should return only the trades within that DateRange", function() { 
            let trades = tradeRepo.GetWithinDateRange('ALE',dateRange);
            expect(trades.length).toBe(3);
        });
    });
});
