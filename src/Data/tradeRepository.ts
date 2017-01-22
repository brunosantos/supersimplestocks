'use strict'

// iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price

// import _ from "lodash";
namespace Data {
    export class TradeRepository {
        private tradeData:Array<Domain.ITrade>;

        constructor() {            
            this.tradeData = new Array<Domain.ITrade>();
        }
        public Save(trade:Domain.ITrade){  
            this.tradeData.push(trade);
        }

        public GetAll(){
            return this.tradeData;
        }

        public Contains(trade:Domain.ITrade){
            return this.tradeData.find(t => t.Equals(trade))!==undefined;
        }
    }
}
