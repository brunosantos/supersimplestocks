'use strict';
var Domain;
(function (Domain) {
    class DateRange {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }
    Domain.DateRange = DateRange;
})(Domain || (Domain = {}));
