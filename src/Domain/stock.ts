'use strict';
namespace Domain {
    export interface IStock {
        readonly symbol: string;
        readonly parValue:number;
    }
    export class Stock implements IStock {
        constructor(public symbol:string, public lastDividend: number, public parValue:number) {
        }        
    }
    export class PreferredStock extends Stock implements IStock  {
        constructor(symbol:string,  lastDividend: number, public fixedDividend: number, parValue:number) { 
            super(symbol,lastDividend,parValue);           
        }        
    }
}
