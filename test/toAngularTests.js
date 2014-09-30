module("To Angular Format Tests");

test("Date checks", function () {
    equal(moment().toADFString("DD."), "dd.", "Check day");
    equal(moment().toADFString("DD.MM."), "dd.MM.", "Check month");
    equal(moment().toADFString("DD.MM.YYYY"), "dd.MM.yyyy", "Check date");

    equal(moment().toADFString("D.M.YYYY"), "d.M.yyyy", "Check date with single day and month");

    equal(moment().toADFString("YYYY"), "yyyy", "Check year with 4 digits");
    equal(moment().toADFString("YY"), "yy", "Check year with 2 digits");

    equal(moment().toADFString("M"), "M", "Check just the month");
    equal(moment().toADFString("MM"), "MM", "Check just the month with leading zero");

    equal(moment().toADFString("MMM"), "MMM", "Check the month name short");
    equal(moment().toADFString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
    equal(moment().toADFString("HH:mm"), "HH:mm", "Check 24h time");
    equal(moment().toADFString("hh:mm"), "hh:mm", "Check 12h time");

    equal(moment().toADFString("hh:mm A"), "hh:mm a", "Check am/pm upper case");
    equal(moment().toADFString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

    equal(moment().toADFString("h:mm A"), "h:mm a", "Check am/pm upper case single hour");
    equal(moment().toADFString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

    equal(moment().toADFString("m"), "m", "Check single minute");
    equal(moment().toADFString("h"), "h", "Check single hour (12 hour format)");
    equal(moment().toADFString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
    equal(moment().toADFString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
    equal(moment().toADFString("HH:mm:ss.SSS"), "HH:mm:ss.sss", "Check time with milliseconds");

    equal(moment().toADFString("s"), "s", "Check just the seconds");
    equal(moment().toADFString("ss"), "ss", "Check just the seconds with leading zero");

    equal(moment().toADFString("S"), "sss", "Check just the milliseconds S");
    equal(moment().toADFString("SS"), "sss", "Check just the milliseconds SS");
    equal(moment().toADFString("SSS"), "sss", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
    equal(moment().toADFString("ddd"), "EEE", "Check weekday name short");
    equal(moment().toADFString("dddd"), "EEEE", "Check weekday name long");

    equal(moment().toADFString("W"), "w", "Check week in year");
    equal(moment().toADFString("WW"), "ww", "Check week in year with leading zero");
});
