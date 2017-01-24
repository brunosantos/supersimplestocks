
//iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price

describe("Given a Stock symbol", function() {
    let stockSymbol = "ALE";    
    describe("and a set of saved Trades", function() {
        let dateNow = new Date(Date.now());
        let dateNowMinus15m =  new Date(dateNow);
        dateNowMinus15m.setMinutes(dateNow.getMinutes()-15);

        let dateNowMinus14m = new Date(dateNow);;
        dateNowMinus14m.setMinutes(dateNow.getMinutes()-14);

        let dateNowMinus13m = new Date(dateNow);;
        dateNowMinus13m.setMinutes(dateNow.getMinutes()-13);

        let dateNowMinus5m = new Date(dateNow);;
        dateNowMinus5m.setMinutes(dateNow.getMinutes()-5);
        
        let trade2 = new Domain.Trade('ALE', dateNowMinus15m,23,Domain.TradeType.Buy,130);   
        let trade3 = new Domain.Trade('ALE', dateNowMinus13m,5,Domain.TradeType.Buy,110);   
        let trade4 = new Domain.Trade('ALE', dateNowMinus14m,20,Domain.TradeType.Sell,140);   
        
        let trade6 = new Domain.Trade('ALE', dateNowMinus5m,8,Domain.TradeType.Buy,110);   
        

        let trades = new Array<Domain.ITrade>();
        
        trades.push(trade2);
        trades.push(trade3);
        trades.push(trade4);
        
        trades.push(trade6);

        it("it should calculate the Volume Weighted Stock Price", function() {     
            let vWSPCalculator = new Services.VWSPCalculator();
            expect(vWSPCalculator.run(stockSymbol,trades)).toBe(101.25);
        }); 
    });
});