'use strict'

// Given a Stock with type Preferred,
// and a market price
// When I calculate the dividend yield
// I should get the result of Fixed Dividend . Par Value/Market Price

namespace Services {
    export interface IStockCalculator {
        run(stock:Domain.IStock, marketPrice: number): number;
    }

    export class DividendYieldCalculator implements IStockCalculator {
        protected isValid(marketPrice:number){
            return marketPrice>0;
        }

        public run(stock:Domain.Stock, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }
            
            if (stock instanceof Domain.PreferredStock) {
                return CommonDividendYieldCalculator.run(stock,marketPrice);
            }
            return PreferedDividendYieldCalculator.run(stock,marketPrice);
        }
    }

    export class PreferedDividendYieldCalculator extends DividendYieldCalculator {
        public static run(stock:Domain.Stock, marketPrice: number){
            return stock.lastDividend/marketPrice;
        }
    }

    export class CommonDividendYieldCalculator extends DividendYieldCalculator {
        public static run(stock:Domain.PreferredStock, marketPrice: number){
            return stock.fixedDividend*stock.parValue/marketPrice;
        }
    }

    export class PERatioCalculator implements IStockCalculator {
        protected isValid(marketPrice:number){
            return marketPrice>0;
        }

        public run(stock:Domain.Stock, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }            
            return marketPrice/stock.lastDividend;
        }
    }

    export class VWSPCalculator {
        private _tradeRepository:Data.TradeRepository;
        constructor(tradeRepository:Data.TradeRepository) {
            this._tradeRepository = tradeRepository;            
        }

        public run(stockSymbol:string, tradeRange:Domain.DateRange){
            let trades = this._tradeRepository.GetWithinDateRange(tradeRange.startDate,tradeRange.endDate);           
            let fundsTradedSum = 0;
            let quantitySum = 0;
            for (let trade of trades) {
                fundsTradedSum += trade.getFundsTraded();
                quantitySum += trade.quantity;
            }

            if(quantitySum<1){
                return 0;
            }

            return fundsTradedSum/quantitySum;
        }
    }
}