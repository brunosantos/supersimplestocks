'use strict';
var Data;
(function (Data) {
    class TradeRepository {
        constructor() {
            this.tradeData = new Array();
        }
        Save(trade) {
            this.tradeData.push(trade);
        }
        GetAll() {
            return this.tradeData;
        }
        Contains(trade) {
            return this.tradeData.find(t => t.Equals(trade)) !== undefined;
        }
        GetWithinDateRange(stockSymbol, dateRange) {
            let filteredTradeData = new Array();
            for (let trade of this.tradeData) {
                if (trade.stockSymbol !== stockSymbol) {
                    break;
                }
                if (trade.IsWithinDateRange(dateRange)) {
                    filteredTradeData.push(trade);
                }
            }
            return filteredTradeData;
        }
    }
    Data.TradeRepository = TradeRepository;
})(Data || (Data = {}));
