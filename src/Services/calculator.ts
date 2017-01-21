'use strict'

// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price

namespace Services {
    export interface IStockCalculator {
        run(stock:Domain.IStock, marketPrice: number): number;
    }

    //calculator factory.
    export class dividendYieldCalculator implements IStockCalculator {
         private toPennies(price: number){
            return price * 100;
        }

        private toFullCurrency(price: number){
            return price / 100;
        }

        private isValid(marketPrice:number){
            return marketPrice>0;
        }

        public run(stock:Domain.Stock, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }
            //stock instanceof Stock;
            return this.toFullCurrency(stock.lastDividend)/marketPrice;
        }
    }
}