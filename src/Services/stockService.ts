'use strict'

namespace Services {
    export interface IStockCalculatorService {
        run(stockSymbol:string, marketPrice: number): number;
    }

    export abstract class StockCalculatorService implements IStockCalculatorService  {
        protected stockRepository:Data.IStockRepository;
        constructor(stockRepository:Data.IStockRepository) {
            this.stockRepository = stockRepository;
        }

        protected isValid(marketPrice:number){
            return marketPrice>0;
        }

        public abstract run(stockSymbol:string, marketPrice: number):number;
    }

    export class DividendYieldCalculatorService extends StockCalculatorService implements IStockCalculatorService  {
        public run(stockSymbol:string, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }
            
            let stock = this.stockRepository.Get(stockSymbol);
            if(!stock){
                return 0;
            }

            return new Services.DividendYieldCalculator().run(stock,marketPrice);
        }
    }

    export class PERatioCalculatorService extends StockCalculatorService implements IStockCalculatorService  {
        public run(stockSymbol:string, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }
            
            let stock = this.stockRepository.Get(stockSymbol);
            if(!stock){
                return 0;
            }

            return new Services.PERatioCalculator().run(stock,marketPrice);
        }
    }

    export class VWSPCalculatorService {
        private _tradeRepository:Data.TradeRepository;
        constructor(tradeRepository:Data.TradeRepository) {
            this._tradeRepository = tradeRepository;            
        }

        public run(stockSymbol:string, dateRange:Domain.DateRange){
            return new Services.VWSPCalculator(this._tradeRepository).run(stockSymbol,dateRange);
        }
    }
}