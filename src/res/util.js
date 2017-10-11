const debug = false;
var baseUrl = "";
function init() {
    if (debug){
        baseUrl = 'http://localhost:8080/blog/';
    }else {
        baseUrl = 'http://www.waws.top/';
    }
}