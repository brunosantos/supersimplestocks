// iii.	Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price
'use strict';
namespace Domain {
    export enum TradeType{ Buy, Sell}

    export interface ITrade {
        stockSymbol: string;
        timeStamp:Date;
        quantity: number;
        type:TradeType;
        price:number;
        Equals(trade:ITrade):boolean;
        IsWithinDateRange(startDate:Date, endDate:Date):boolean;
    }
    export class Trade implements ITrade {
        constructor(public stockSymbol:string, public timeStamp:Date, public quantity:number, public type:TradeType, public price:number) {
        }    
        public Equals(trade:ITrade):boolean{
            if(trade instanceof Trade){
                if(trade.stockSymbol===this.stockSymbol
                && trade.timeStamp===this.timeStamp
                && trade.quantity===this.quantity
                && trade.type===this.type
                && trade.price===this.price)
                {
                    return true;
                }
            }
            return false;
        }    

        public IsWithinDateRange(startDate:Date, endDate:Date):boolean{
            return this.timeStamp>=startDate && this.timeStamp < endDate;
        }
    }
}
