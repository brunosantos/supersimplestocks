'use strict';
namespace superSimpleStocks.Data {
    export interface IRepository {
        getAll() : superSimpleStocks.Domain.IStock[]; 
        getStock(symbol:string) : superSimpleStocks.Domain.IStock; 
    }
    export class stockRepository implements IRepository {
        private _stockData: Array<superSimpleStocks.Domain.Stock> = [new superSimpleStocks.Domain.Stock('TEA', 0, 100), 
            new superSimpleStocks.Domain.Stock('POP', 8, 100),
            new superSimpleStocks.Domain.Stock('ALE', 23, 60),            
            new superSimpleStocks.Domain.PreferredStock('GIN', 8, 100, 2),
            new superSimpleStocks.Domain.Stock('JOE', 13, 250)
            ];
        getAll(){
            // let list: Array<superSimpleStocks.Domain.Stock> = [1, 2, 3];
            return this._stockData;
        }    
        getStock(symbol:string){
            return this._stockData[1];//.find(this._hasSymbol);            
        }    

        private _hasSymbol(stock:superSimpleStocks.Domain.IStock, index:number, array:any)
        {
            return stock.symbol === '';
        }
    }
}