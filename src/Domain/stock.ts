'use strict';
namespace superSimpleStocks.Domain {
    export interface IStock {
        readonly symbol: string;
        readonly parValue:number;
    }
    export class CommonStock implements IStock {
        constructor(public symbol:string, public parValue:number, public lastDividend: number) {
        }        
    }
    export class PreferredStock implements IStock {
        constructor(public symbol:string, public parValue:number, public fixedDividend: number) {            
        }        
    }
}