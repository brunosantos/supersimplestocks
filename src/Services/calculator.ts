'use strict'

// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price

namespace superSimpleStocks.Services {
    export interface ICalculator {
        run(lastDividend:number, marketPrice:number): number;
    }
    export class dividendYieldCalculator implements ICalculator {
        public run(lastDividend:number, marketPrice:number){
            return 0;
        }
    }
}