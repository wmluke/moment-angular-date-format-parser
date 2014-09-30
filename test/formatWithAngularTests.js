module("From Angular Format Tests");

test("Date checks", function () {
    equal(moment("2013-12-24 14:30").formatWithADF("dd."), "24.", "Check day");
    equal(moment("2013-12-24 14:30").formatWithADF("dd.MM."), "24.12.", "Check day and Month");
    equal(moment("2013-12-24 14:30").formatWithADF("dd.MM.yyyy"), "24.12.2013", "Check date");

    equal(moment("2013-12-24 14:30").formatWithADF("d.M.yyyy"), "24.12.2013", "Check date single day and month");
    equal(moment("2013-07-04 14:30").formatWithADF("d.M.yyyy"), "4.7.2013", "Check date single day and month");

    equal(moment("2013-07-04 14:30").formatWithADF("yyyy"), "2013", "Check just the year with 4 digits");
    equal(moment("2013-07-04 14:30").formatWithADF("yy"), "13", "Check just the year with 2 digits");

    equal(moment("2013-07-04 14:30").formatWithADF("M"), "7", "Check just the month");
    equal(moment("2013-07-04 14:30").formatWithADF("MM"), "07", "Check just the month with leading zero");

    equal(moment("2013-07-04 14:30").formatWithADF("MMM"), "Jul", "Check the month name short");
    equal(moment("2013-07-04 14:30").formatWithADF("MMMM"), "July", "Check the month name long");
});

test("Hour and minute checks", function () {
    equal(moment("2013-12-24 14:30").formatWithADF("HH:mm"), "14:30", "Check 24h time");
    equal(moment("2013-12-24 14:30").formatWithADF("hh:mm"), "02:30", "Check 12h time");

    equal(moment("2013-12-24 14:30").formatWithADF("hh:mm a"), "02:30 pm", "Check pm lower case");
    equal(moment("2013-12-24 04:30").formatWithADF("hh:mm a"), "04:30 am", "Check am lower case");

    equal(moment("2013-12-24 14:09").formatWithADF("h:mm a"), "2:09 pm", "Check pm lower case single hour");
    equal(moment("2013-12-24 04:09").formatWithADF("h:mm a"), "4:09 am", "Check pm lower case single hour");

    equal(moment("2013-12-24 14:09").formatWithADF("m"), "9", "Check single minute");
    equal(moment("2013-12-24 14:09").formatWithADF("h"), "2", "Check single hour (12 hour format)");
    equal(moment("2013-12-24 14:09").formatWithADF("H"), "14", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
    equal(moment("2013-12-24 14:30:49.257").formatWithADF("HH:mm:ss"), "14:30:49", "Check time with seconds of the minute");
    equal(moment("2013-12-24 14:30:49.257").formatWithADF("HH:mm:ss.sss"), "14:30:49.257", "Check time with milliseconds");

    equal(moment("2013-12-24 14:30:09.257").formatWithADF("s"), "9", "Check just the seconds");
    equal(moment("2013-12-24 14:30:09.257").formatWithADF("ss"), "09", "Check just the seconds with leading zero");

    equal(moment("2013-12-24 14:30:49.257").formatWithADF("sss"), "257", "Check just the milliseconds S");
});

test("Weekday checks", function () {
    equal(moment("2013-12-24 14:30").formatWithADF("EEE"), "Tue", "Check weekday name short");
    equal(moment("2013-12-24 14:30").formatWithADF("EEEE"), "Tuesday", "Check weekday name long");

    equal(moment("2013-01-10 14:30").formatWithADF("w"), "2", "Check week in year");
    equal(moment("2013-01-10 14:30").formatWithADF("ww"), "02", "Check week in year with leading zero");
});

test("Timezone checks", function () {
    equal(moment.parseZone("2013-12-24 14:30:00+0100").formatWithADF("Z"), "+0100", "Check day in year");

});
