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
                    it("When I Save a Trade", function() {     
                        let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,tradeType,price);     
                        let tradeRepo = new Data.TradeRepository();
                        tradeRepo.Save(trade);
                        
                        expect(tradeRepo.Contains(trade)).toBe(true);
                    });
                });

                describe("and tradeType of Sell", function() {
                    let tradeType=Domain.TradeType.Sell;
                    it("When I Save a Trade", function() {  
                        let trade = new Domain.Trade(stockSymbol,timeStamp,quantity,tradeType,price);          
                        let tradeRepo = new Data.TradeRepository();
                        tradeRepo.Save(trade);
                        
                        expect(tradeRepo.Contains(trade)).toBe(true);
                    });
                });
            });
        });
        // describe("and quantity of shares of -1", function() {
        //     let quantity=-1;
        //     it("When I calculate the P/E Ratio", function() {            
        //         let dividendYieldCalculator = new Services.PERatioCalculator();
        //         expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(12.5);
        //     });            
        // });
        // describe("and quantity of shares of 0", function() {
        //     let quantity=-1;
        //     it("When I calculate the P/E Ratio", function() {            
        //         let dividendYieldCalculator = new Services.PERatioCalculator();
        //         expect(dividendYieldCalculator.run(simpleStock,marketPrice)).toBe(12.5);
        //     });            
        // });
    });
    // describe("and a timestamp in the future", function() {
    //     let timeStamp = Date.now();
        
    // });
});
