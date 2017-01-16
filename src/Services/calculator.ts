'use strict'

// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price

namespace superSimpleStocks.Services {
    export interface IStockCalculator {
        run(stock:superSimpleStocks.Domain.IStock, marketPrice: number): number;
    }

    //calculator factory.
    export class dividendYieldCalculator implements IStockCalculator {
         private _toPennies(price: number){
            return price * 100;
        }

        private _toFullCurrency(price: number){
            return price / 100;
        }

        public run(stock:superSimpleStocks.Domain.Stock, marketPrice: number){
            //stock instanceof Stock;
            return this._toFullCurrency(stock.lastDividend)/marketPrice;
        }
    }
}