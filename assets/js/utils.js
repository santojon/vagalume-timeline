/**
 * Append CUSTOM and SPECIFIC parser to iso8601 date strings
 * to String class, problably only useful to this application
 * @return: a new Date object with string given date and time
 */
String.prototype.iso8601ToDate = function () {
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

/**
 * Order array of objects bry property name
 */
Array.prototype.orderBy = function (field, order, rfunc) {
    var key = rfunc ?
        function(x) { return rfunc(x[field]); } :
        function(x) { return x[field]; };

    order = (order === 'desc') ? -1 : 1;

    return this.sort(function (a, b) {
        return a = key(a), b = key(b), order * ((a > b) - (b > a));
    });
};

/**
 * Action when user enjoys a post
 */
function enjoy(elem) {
    str = elem.childNodes[2].data;
    val = parseInt(str);

    elem.title = 'you have already enjoyed it.';
    elem.innerHTML = '<span class="fa fa-thumbs-up" aria-hidden="true"></span> ' + (val + 1);
    elem.disabled = true;
}