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
        IsWithinDateRange(dateRange:IDateRange):boolean;
        getFundsTraded():number;
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

        public IsWithinDateRange(dateRange:IDateRange):boolean{
            return this.timeStamp>=dateRange.startDate && this.timeStamp < dateRange.endDate;
        }

        public getFundsTraded():number{
            return this.price*this.quantity;
        }
    }

    export interface IDateRange {
        startDate:Date;
        endDate:Date;
    }

    export class DateRange implements IDateRange {
        constructor(public startDate:Date, public endDate:Date) {
        }
    }    
}
