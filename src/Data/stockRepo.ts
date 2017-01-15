'use strict';
namespace superSimpleStocks.Data {
    export interface IRepository {
        getAll() : superSimpleStocks.Domain.IStock[]; 
    }
    export class stockRepository implements IRepository {
        getAll(){
            return [new superSimpleStocks.Domain.Stock('TEA', 0, 100), 
            new superSimpleStocks.Domain.Stock('POP', 8, 100),
            new superSimpleStocks.Domain.Stock('ALE', 23, 60),            
            new superSimpleStocks.Domain.PreferredStock('GIN', 8, 100, 2),
            new superSimpleStocks.Domain.Stock('JOE', 13, 250)
            ]
        }       
    }
}