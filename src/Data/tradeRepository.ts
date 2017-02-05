'use strict'

// iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price
import * as Domain from "../Domain/domain";

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

        public GetWithinDateRange(stockSymbol:string, dateRange:Domain.DateRange){
            let filteredTradeData:Array<Domain.ITrade>= new Array<Domain.ITrade>();
            for (let trade of this.tradeData) {
                if(trade.stockSymbol!==stockSymbol){
                    break;
                }
                if(trade.IsWithinDateRange(dateRange)){
                    filteredTradeData.push(trade);
                }
            }
            return filteredTradeData;
        }
    }
