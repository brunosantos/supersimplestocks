'use strict';
namespace superSimpleStocks.Domain {
    export interface IStock {
        readonly symbol: string;
        readonly type:stockType;
    }
    export class Stock implements IStock {
        constructor(public symbol:string,
        public type: stockType) {            
            
        }        
    }
    export enum stockType {
        Common = 1,
        Preferred
    }
}