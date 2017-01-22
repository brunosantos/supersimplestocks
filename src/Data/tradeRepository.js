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
    }
    Data.TradeRepository = TradeRepository;
})(Data || (Data = {}));
