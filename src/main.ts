import * as superSimpleStocks from "./superSimpleStocks";

console.log('### main started ###');
let tea = new superSimpleStocks.Stock('TEA', 0, 100);
let pop = new superSimpleStocks.Stock('POP', 8, 100);
let ale = new superSimpleStocks.Stock('ALE', 23, 100);
let gin = new superSimpleStocks.PreferredStock('GIN', 8, 0.02, 250);
let joe = new superSimpleStocks.Stock('JOE', 13, 250);

let stockService = new superSimpleStocks.StockService();

stockService.Save(tea);
stockService.Save(pop);
stockService.Save(ale);
stockService.Save(gin);
stockService.Save(joe);
console.log('## Stock repository prefilled ##');

console.log('i.	For a given stock Given a market price as input, calculate the dividend yield');
var dividendYield = stockService.CalculateDividendYield('POP', 120);
console.log('POP at 120 -> dividendYield=',dividendYield);

var prefereddividendYield = stockService.CalculateDividendYield('GIN', 120);
console.log('GIN at 120 -> dividendYield=',prefereddividendYield);

console.log('ii.	Given a market price as input,  calculate the P/E Ratio');
var peratio = stockService.CalculatePERatio('JOE', 90);
console.log('JOE at 90 -> PE Ratio=',peratio);

let tradeService = new superSimpleStocks.TradeService();

let trade = new superSimpleStocks.Trade("GIN",new Date(2017, 1, 15, 9, 24, 0),10,superSimpleStocks.TradeType.Sell,342);   
console.log('saving Trade with symbol= GIN');
tradeService.Save(trade);
console.log('Trade saved with symbol=',tradeService.GetAll().pop().stockSymbol);

//Trade
let dateNow = new Date(Date.now());
let dateNowMinus15m =  new Date(dateNow);
dateNowMinus15m.setMinutes(dateNow.getMinutes()-15);

let dateNowMinus14m = new Date(dateNow);;
dateNowMinus14m.setMinutes(dateNow.getMinutes()-14);

let dateNowMinus13m = new Date(dateNow);;
dateNowMinus13m.setMinutes(dateNow.getMinutes()-13);

let dateNowMinus5m = new Date(dateNow);;
dateNowMinus5m.setMinutes(dateNow.getMinutes()-5);

let trade1 = new superSimpleStocks.Trade('ALE', new Date(2017, 1, 15, 9, 8, 0),10,superSimpleStocks.TradeType.Buy,100);
let trade2 = new superSimpleStocks.Trade('ALE', dateNowMinus15m,23,superSimpleStocks.TradeType.Buy,130);   
let trade3 = new superSimpleStocks.Trade('ALE', dateNowMinus13m,5,superSimpleStocks.TradeType.Buy,110);   
let trade4 = new superSimpleStocks.Trade('ALE', dateNowMinus14m,20,superSimpleStocks.TradeType.Sell,140);   
let trade5 = new superSimpleStocks.Trade('ALE', new Date(2017, 1, 15, 0, 8, 0),23,superSimpleStocks.TradeType.Buy,90);
let trade6 = new superSimpleStocks.Trade('ALE', dateNowMinus5m,8,superSimpleStocks.TradeType.Buy,110);   
let trade7 = new superSimpleStocks.Trade('ALE', new Date(2017, 1, 6, 9, 8, 0),23,superSimpleStocks.TradeType.Buy,124);

console.log('saving 7 Trades with 3 in the last 15min');
tradeService.Save(trade1);
tradeService.Save(trade2);
tradeService.Save(trade3);
tradeService.Save(trade4);
tradeService.Save(trade5);
tradeService.Save(trade6);
tradeService.Save(trade7);

console.log('iv.Calculate Volume Weighted Stock Price based on trades in past 15 minutes');

let last15Minutes = new superSimpleStocks.DateRange(dateNowMinus15m,dateNow);
let vWSP=tradeService.CalculateVWSP('ALE',last15Minutes);
console.log('Volume Weighted Stock Price T-15 =',vWSP);

console.log('b.	Calculate the GBCE All Share Index using the geometric mean of prices for all stocks');
let allShareIdex=stockService.CalculateAllShareIndex();
console.log('GBCE All Share Index =',allShareIdex);

console.log('### main ended ### ');