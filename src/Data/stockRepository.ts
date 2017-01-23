'use strict'

// import _ from "lodash";
namespace Data {
    export interface IStockRepository{
        Save(stock:Domain.IStock):IStockRepository;
        Get(stock:Domain.IStock):Domain.IStock;
        Count():number;
    }
    export class StockRepository implements IStockRepository {
        private stockData:Map<string,Domain.IStock>;

        constructor() {            
            this.stockData = new Map<string,Domain.IStock>();
        }

        public Save(stock:Domain.IStock){  
            this.stockData.set(stock.symbol,stock);
            return this;
        }

        public Get(stock:Domain.IStock){  
            return this.stockData.get(stock.symbol);
        }

        public Count(){  
            return this.stockData.size;
        }
    }   
}
