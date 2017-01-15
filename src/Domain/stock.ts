'use strict';
namespace superSimpleStocks.Domain {
    export interface IStock {
        readonly symbol: string;
        readonly parValue:number;
    }
    export class Stock implements IStock {
        constructor(public symbol:string, public parValue:number, public lastDividend: number) {
        }        
    }
    export class PreferredStock extends Stock {
        constructor(symbol:string, parValue:number, lastDividend: number, public fixedDividend: number) { 
            super(symbol,parValue,lastDividend);           
        }        
    }
}