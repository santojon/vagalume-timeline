/**
 * Append CUSTOM and SPECIFIC parser to iso8601 date strings
 * to String class, problably only useful to this application
 * @return: a new Date object with string given date and time
 */
String.prototype.iso8601ToDate = function() {
    isoStr = this;
    parts = isoStr.split('');

    year = parts[0] + parts[1] + parts[2] + parts[3];
    month = parts[5] + parts[6];
    day = parts[8] + parts[9];
    hour = parts[11] + parts[12];
    minute = parts[14] + parts[15];
    second = parts[17] + parts[18];

    operator = parts[20];

    gmtHour = parts[21] + parts[22];

    result = new Date(Date.UTC(year, month, day, hour, minute, second));

    if (operator === '+') {
        result.setHours(result.getHours() + parseInt(gmtHour));
    } else if (operator === '-') {
        result.setHours(result.getHours() - parseInt(gmtHour));
    }
    return result;
}