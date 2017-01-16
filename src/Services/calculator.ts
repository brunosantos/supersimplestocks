'use strict'

// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price

namespace superSimpleStocks.Services {
    export interface ICalculator {
        run(stock:superSimpleStocks.Domain.IStock, marketPrice: number): number;
    }
    //calculator factory.
    export class dividendYieldCalculator implements ICalculator {
        public run(stock:superSimpleStocks.Domain.Stock, marketPrice: number){
            //stock instanceof Stock;
            return stock.lastDividend/marketPrice;
        }
    }
}