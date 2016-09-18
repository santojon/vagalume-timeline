/**
 * Load file from an url and returns a string with its content
 * @param url: the url to fetch data.
 */
var load = function(url) {
    var xhr;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } else {
        return false;
    }
    xhr.open('GET', url, false);
    if(xhr.overrideMimeType) {
        xhr.overrideMimeType('text/plain');
    }
    xhr.send(null);
    if(xhr.status == 200) {
        return xhr.responseText;
    }
    return false;
}