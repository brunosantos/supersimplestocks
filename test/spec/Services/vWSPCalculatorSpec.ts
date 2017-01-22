
//iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price

describe("Given a Stock symbol", function() {
    let stockSymbol = "ALE";    
    describe("and a set of saved Trades and a DateRange of 15 minutes from now", function() {
        let dateNow = new Date(Date.now());
        let dateNowMinus15m =  new Date(dateNow);
        dateNowMinus15m.setMinutes(dateNow.getMinutes()-15);

        let dateNowMinus14m = new Date(dateNow);;
        dateNowMinus14m.setMinutes(dateNow.getMinutes()-14);

        let dateNowMinus13m = new Date(dateNow);;
        dateNowMinus13m.setMinutes(dateNow.getMinutes()-13);

        let dateNowMinus5m = new Date(dateNow);;
        dateNowMinus5m.setMinutes(dateNow.getMinutes()-5);

        let trade1 = new Domain.Trade('ALE', new Date(2017, 1, 15, 9, 8, 0),10,Domain.TradeType.Buy,100);
        let trade2 = new Domain.Trade('ALE', dateNowMinus15m,23,Domain.TradeType.Buy,130);   
        let trade3 = new Domain.Trade('ALE', dateNowMinus13m,5,Domain.TradeType.Buy,110);   
        let trade4 = new Domain.Trade('ALE', dateNowMinus14m,20,Domain.TradeType.Sell,140);   
        let trade5 = new Domain.Trade('ALE', new Date(2017, 1, 15, 0, 8, 0),23,Domain.TradeType.Buy,90);
        let trade6 = new Domain.Trade('ALE', dateNowMinus5m,8,Domain.TradeType.Buy,110);   
        let trade7 = new Domain.Trade('ALE', new Date(2017, 1, 6, 9, 8, 0),23,Domain.TradeType.Buy,124);

        let tradeRepo = new Data.TradeRepository();
        tradeRepo.Save(trade1);
        tradeRepo.Save(trade2);
        tradeRepo.Save(trade3);
        tradeRepo.Save(trade4);
        tradeRepo.Save(trade5);
        tradeRepo.Save(trade6);
        tradeRepo.Save(trade7);

        let range = new Domain.DateRange(dateNowMinus15m,dateNow);

        it("it should calculate the Volume Weighted Stock Price", function() {          
            let vWSPCalculator = new Services.VWSPCalculator(tradeRepo);
            expect(vWSPCalculator.run(stockSymbol,range)).toBe(101.25);
        }); 
    });
});