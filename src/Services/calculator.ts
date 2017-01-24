'use strict'

namespace Services {
    export interface IStockCalculator {
        run(stock:Domain.Stock, marketPrice: number): number;
    }

    export class DividendYieldCalculatorFactory {
        public static create(stock:Domain.IStock){
            if (PreferedDividendYieldCalculator.Handles(stock)) {
                return new PreferedDividendYieldCalculator();
            }
            return new CommonDividendYieldCalculator();
        }
    }

    export class DividendYieldCalculator implements IStockCalculator {
        protected isValid(marketPrice:number){
            return marketPrice>0;
        }

        public static Handles(stock:Domain.IStock):boolean{
            return false;
        }

        public run(stock:Domain.Stock, marketPrice: number){
            if(!stock || !this.isValid(marketPrice)){
                return 0;
            }

            return DividendYieldCalculatorFactory.create(stock).run(stock,marketPrice);
        }
    }

    class CommonDividendYieldCalculator extends DividendYieldCalculator {
        public static Handles(stock:Domain.IStock):boolean{
             return !(stock instanceof Domain.PreferredStock);
        }

        public run(stock:Domain.Stock, marketPrice: number){
            return stock.lastDividend/marketPrice;
        }
    }

    class PreferedDividendYieldCalculator extends DividendYieldCalculator {
        public static Handles(stock:Domain.IStock):boolean{
            return stock instanceof Domain.PreferredStock;
        }
        public run(stock:Domain.Stock, marketPrice: number){
            if(!PreferedDividendYieldCalculator.Handles(stock)){
                return 0;
            }
            return (<Domain.PreferredStock>stock).fixedDividend*stock.parValue/marketPrice;
        }
    }

    export class PERatioCalculator implements IStockCalculator {
        protected isValid(marketPrice:number){
            return marketPrice>0;
        }

        public run(stock:Domain.Stock, marketPrice: number){
            if(!this.isValid(marketPrice)){
                return 0;
            }            
            return marketPrice/stock.lastDividend;
        }
    }

    export class VWSPCalculator {
        public run(stockSymbol:string, trades:Array<Domain.ITrade>){                      
            let fundsTradedSum = 0;
            let quantitySum = 0;
            for (let trade of trades) {
                if(trade.type === Domain.TradeType.Buy){
                    fundsTradedSum += trade.getFundsTraded();
                    quantitySum += trade.quantity;
                }else{
                    fundsTradedSum -= trade.getFundsTraded();
                    quantitySum -= trade.quantity;
                }
            }

            if(quantitySum<1){
                return 0;
            }

            return fundsTradedSum/quantitySum;
        }
    }
}