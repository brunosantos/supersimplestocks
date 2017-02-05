'use strict'
import * as Data from "../../src/Data/data";
import * as Domain from "../../src/Domain/domain";
import * as Services from "../../src/Services/services";

describe("Given all GBCE stocks", function() {
    let tea = new Domain.Stock('TEA', 0, 100);
    let pop = new Domain.Stock('POP', 8, 100);
    let ale = new Domain.Stock('ALE', 23, 100);
    let gin = new Domain.PreferredStock('GIN', 8, 0.02, 250);
    let joe = new Domain.Stock('JOE', 13, 250);

    let stockRepo = new Data.StockRepository();
    stockRepo.Save(tea);
    stockRepo.Save(pop);
    stockRepo.Save(ale);
    stockRepo.Save(gin);
    stockRepo.Save(joe); 

    describe("and a Stock symbol of type Common", function() {
        let simpleStock = 'POP';
        describe("and a market price as input", function() {
            let marketPrice = 100;
            it("When I calculate the dividend yield", function() {            
                let calculatorService = new Services.DividendYieldCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0.08);
            });
            it("When I calculate the PE Ratio", function() {            
                let calculatorService = new Services.PERatioCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(12.5);
            });
            
        });

        describe("and a market price as input of -1", function() {
            let marketPrice = -1;
            it("When I calculate the dividend yield", function() {            
                let calculatorService = new Services.DividendYieldCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0);
            });
            it("When I calculate the PE Ratio", function() {            
                let calculatorService = new Services.PERatioCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0);
            });
        });
        describe("and a market price as input of 0", function() {
            let marketPrice = 0;
            it("When I calculate the dividend yield", function() {            
                let calculatorService = new Services.DividendYieldCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0);
            });
            it("When I calculate the PE Ratio", function() {            
                let calculatorService = new Services.PERatioCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0);
            });
        });
    });

    describe("and a Stock symbol of type Preferred", function() {
        let simpleStock = 'GIN';
        describe("and a market price as input", function() {
            let marketPrice = 100;
            it("When I calculate the dividend yield", function() {            
                let calculatorService = new Services.DividendYieldCalculatorService(stockRepo);
                expect(calculatorService.run(simpleStock,marketPrice)).toBe(0.05);
            });
        });
    });
    
    describe("When I calculate the All Share Index", function() {
        it("Should be 144.269", function() {            
            let calculatorService = new Services.AllShareIndexCalculatorService(stockRepo);
            expect(calculatorService.run()).toBe(144.2699905907214);
        });
    });
});

describe("Given a a set of saved Trades", function() {
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
    describe("and Stock symbol and a DateRange of 15 minutes from now", function() {
        let stockSymbol = "ALE"; 

        let range = new Domain.DateRange(dateNowMinus15m,dateNow);

        it("When I calculate the Volume Weighted Stock Price", function() {            
            let calculatorService = new Services.VWSPCalculatorService(tradeRepo);
            expect(calculatorService.run(stockSymbol,range)).toBe(101.25);
        });
    });
});