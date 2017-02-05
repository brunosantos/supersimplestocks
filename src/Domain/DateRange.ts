'use strict';
    export interface IDateRange {
        startDate:Date;
        endDate:Date;
    }

    export class DateRange implements IDateRange {
        constructor(public startDate:Date, public endDate:Date) {
        }
    }    
