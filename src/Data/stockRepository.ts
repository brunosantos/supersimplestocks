'use strict'

// import _ from "lodash";
namespace Data {
    export interface IStockRepository{
        Save(stock:Domain.Stock):IStockRepository;
        Get(stockSymbol:string):Domain.Stock;
        Count():number;
    }
    export class StockRepository implements IStockRepository {
        private stockData:Map<string,Domain.Stock>;

        constructor() {            
            this.stockData = new Map<string,Domain.Stock>();
        }

        public Save(stock:Domain.Stock){  
            this.stockData.set(stock.symbol,stock);
            return this;
        }

        public Get(stockSymbol:string){  
            return this.stockData.get(stockSymbol);
        }

        public Count(){  
            return this.stockData.size;
        }
    }   
}
