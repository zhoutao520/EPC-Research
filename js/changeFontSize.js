var docEl = document.documentElement,
    clientWidth = docEl.clientWidth;
docEl.style.fontSize = clientWidth / 16 + 'px';
// var baseURL = 'http://192.168.0.39/services/';
// var baseURL = 'http://192.168.0.39/services/';
// var baseURL = 'http://192.168.0.3/services/';
var baseURL = 'http://surveyhd.epcifm.com/services/';
if(localStorage.getItem('userId')==null){
    location.href = 'login.html';
}