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
        IsWithinDateRange(dateRange) {
            return this.timeStamp >= dateRange.startDate && this.timeStamp < dateRange.endDate;
        }
        getFundsTraded() {
            return this.price * this.quantity;
        }
    }
    Domain.Trade = Trade;
    class DateRange {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }
    Domain.DateRange = DateRange;
})(Domain || (Domain = {}));
