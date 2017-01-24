'use strict'

namespace Services {    
    export class TradeService {
        protected _tradeRepository:Data.TradeRepository;
        constructor(tradeRepository?:Data.TradeRepository) {
            if(tradeRepository){
                this._tradeRepository = tradeRepository;
            }
            else{
                this._tradeRepository = new Data.TradeRepository();
            }
        }

        public Save(trade:Domain.Trade){
            return this._tradeRepository.Save(trade);
        } 
        public GetAll(){
            return this._tradeRepository.GetAll();
        }  
        
        public CalculateVWSP(stockSymbol:string, dateRange:Domain.DateRange){
            return new VWSPCalculatorService(this._tradeRepository).run(stockSymbol,dateRange);
        }      
    }
}