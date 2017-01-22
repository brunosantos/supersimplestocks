'use strict'

// import _ from "lodash";
namespace Data {
    export class StockRepository {
        private data:Map<Domain.IStock, string>;

        constructor() {            
            this.data = new Map();
        }
        public SaveStock(stock:Domain.IStock){  
            // this.data = _.map(stock,stock.symbol);
        }
    }   
}
