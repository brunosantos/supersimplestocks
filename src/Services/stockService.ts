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
            let trades = this._tradeRepository.GetWithinDateRange(stockSymbol, dateRange);
            return new Services.VWSPCalculator().run(stockSymbol,trades);
        }
    }
    
    // export class AllShareIndexCalculatorService extends StockCalculatorService implements IStockCalculatorService  {
    //     public run(stockSymbol:string, marketPrice: number){
    //         if(!this.isValid(marketPrice)){
    //             return 0;
    //         }
            
    //         let stock = this.stockRepository.GetAll();
    //         if(!stock){
    //             return 0;
    //         }

    //         return new Services.PERatioCalculator().run(stock,marketPrice);
    //     }
    // }

    export class StockService {
        protected _stockRepository:Data.IStockRepository;
        constructor(stockRepository?:Data.IStockRepository) {
            if(stockRepository){
                this._stockRepository = stockRepository;
            }
            else{
                this._stockRepository = new Data.StockRepository();
            }
        }

        public Save(stock:Domain.Stock){
            return this._stockRepository.Save(stock);
        }  
        
        public CalculateDividendYield(stockSymbol:string, marketPrice: number){
            return new DividendYieldCalculatorService(this._stockRepository).run(stockSymbol,marketPrice);
        }      

        public CalculatePERatio(stockSymbol:string, marketPrice: number){
            return new PERatioCalculatorService(this._stockRepository).run(stockSymbol,marketPrice);
        }  
    }
}