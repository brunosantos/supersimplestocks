'use strict';
namespace superSimpleStocks.Data {
    export interface IRepository {
        // getAll() : superSimpleStocks.Domain.Stock[]; 
    }
    export class stockRepository implements IRepository {
        getThat(){
            return [
                // {
                //     symbol: "",
                //     stock : new superSimpleStocks.Domain.Stock('TEA')
                // },
                // {
                //     symbol: "",
                //     stock : new superSimpleStocks.Domain.Stock('TEA')
                // }   
            ]
        }
        
    }
}