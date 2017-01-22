'use strict';
var Domain;
(function (Domain) {
    var TradeType;
    (function (TradeType) {
        TradeType[TradeType["Buy"] = 0] = "Buy";
        TradeType[TradeType["Sell"] = 1] = "Sell";
    })(TradeType = Domain.TradeType || (Domain.TradeType = {}));
    class Trade {
        constructor(stockSymbol, timeStamp, quantity, type, price) {
            this.stockSymbol = stockSymbol;
            this.timeStamp = timeStamp;
            this.quantity = quantity;
            this.type = type;
            this.price = price;
        }
        Equals(trade) {
            if (trade instanceof Trade) {
                if (trade.stockSymbol === this.stockSymbol
                    && trade.timeStamp === this.timeStamp
                    && trade.quantity === this.quantity
                    && trade.type === this.type
                    && trade.price === this.price) {
                    return true;
                }
            }
            return false;
        }
        IsWithinDateRange(startDate, endDate) {
            return this.timeStamp >= startDate && this.timeStamp < endDate;
        }
        getFundsTraded() {
            return this.price * this.quantity;
        }
    }
    Domain.Trade = Trade;
})(Domain || (Domain = {}));
