//My Library in future to be used instead of JQUERY
function MyLib(selector){
  //TODO CHILDS
  //TODO HASCLASS ON MULTIPLE SELECTING OBJECTS (classes, tagnames etc)
  //TODO KEYPRESS FUNCTIONS WITH ENUM
  //TODO INNERHTML FUNCTION
  //TODO CLICK FUNCTION THIS NOT WORKING IT MUST RETURN SAME OBJECT FOR ADDDING CLASSES

  if(selector){
    this.selectedObj = [];
    this.selectorManager(selector);
  }
  return this;
};

//The library is still in development process, so until making it perfect, lets use jQuery.
/*
 MyLib.prototype.selectorManager = function(selector){
 if(selector.indexOf(',') != -1){
 //That means there are several objects to change
 var selectorsArr = selector.split(',');
 for(var i = 0, length = selectorsArr.length;i<length;i++){
 this.selectorManager(selectorsArr[i].trim());
 }
 }
 else{
 if(selector.indexOf(' ') != -1 ||
 selector.split('.').length > 2 ||
 selector.split('#').length > 2 ||
 selector.indexOf(':') != -1 ||
 selector.indexOf('>') != -1 ||
 (selector.charAt(0).match(/[a-z]/i) && (selector.indexOf('#') != -1 || selector.indexOf('.') != -1))){
 this.selectedObjManager(document.querySelectorAll(selector));
 }
 else if(selector.charAt(0) == '.'){
 this.selectedObjManager(document.getElementsByClassName(selector.replace('.','')));
 }
 else if(selector.charAt(0) == '#'){
 this.selectedObjManager(document.getElementById(selector.replace('#','')));

 }
 else if(selector.charAt(0).match(/[a-z]/i)){
 this.selectedObjManager(document.getElementsByTagName(selector));

 }
 else{
 this.selectedObjManager(document.querySelectorAll(selector));
 }
 }
 }
 MyLib.prototype.selectedObjManager = function(selected){
 if(selected){
 if(selected.length){
 for(var i = 0,length = selected.length;i<length;i++){
 this.selectedObj.push(selected[i]);
 }
 }
 else if(typeof selected.length === "undefined"){
 this.selectedObj.push(selected);
 }
 }
 };

 MyLib.prototype.hasClass = function(cls,el){
 if(el){
 return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
 }
 else{
 return (' ' + this.selectedObj[0].className + ' ').indexOf(' ' + cls + ' ') > -1;
 }
 };
 MyLib.prototype.addClass = function(cls) {
 for(var i = 0, length = this.selectedObj.length; i<length;i++){
 if(!this.hasClass(cls,this.selectedObj[i])){
 if(this.selectedObj[i].className.slice(-1) != " "){
 this.selectedObj[i].className += " "+cls;
 }
 else{
 this.selectedObj[i].className += cls;
 }
 }
 }
 return this;
 };
 MyLib.prototype.removeClass = function(cls) {
 for(var i = 0, length = this.selectedObj.length; i<length;i++){
 if (this.hasClass(cls,this.selectedObj[i])) {
 var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
 this.selectedObj[i].className = this.selectedObj[i].className.replace(reg,' ');
 }
 }
 return this;
 };
 MyLib.prototype.toggleClass = function(cls){
 for(var i = 0, length = this.selectedObj.length; i<length;i++){
 if (!this.hasClass(cls,this.selectedObj[i])) {
 if(this.selectedObj[i].className.slice(-1) != " "){
 this.selectedObj[i].className += " "+cls;
 }
 else{
 this.selectedObj[i].className += cls;
 }
 }
 else{
 var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
 this.selectedObj[i].className= this.selectedObj[i].className.replace(reg,' ');
 }
 }
 return this;
 };
 MyLib.prototype.changeStyle = function(css){
 for(var i = 0, length = this.selectedObj.length; i<length;i++){
 for(var key in css){
 this.selectedObj[i].style[key] = css[key];
 }
 }
 return this;
 };
 MyLib.prototype.click = function(callback){
 for(var i = 0, length = this.selectedObj.length; i<length;i++){
 this.selectedObj[i].addEventListener('click',function(e){
 callback.call(this,e);
 });
 }
 return this;
 };
 MyLib.prototype.ajax = function(options) {
 if(!options){
 throw "ajaxCall function has no argument - options!";
 }
 else if(!options.url || options.url == ""){
 throw "ajax options has no url specified";
 }

 var customOptions = {
 async : options.async || true,
 data : options.data || {},
 url : options.url,
 method : options.method || 'POST',
 contentType : options.contentType || '',
 username : options.username || '',
 password : options.password || '',
 error : options.error || function(){throw "Some error occured during ajax call!"},
 success : options.success || function(data){console.log(data)}
 };

 (customOptions.method == 'post') ? customOptions.contentType = "application/json; charset=utf-8" : customOptions.contentType = "application/x-www-form-urlencoded; charset=UTF-8'";

 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (xhttp.readyState == 4 && xhttp.status == 200) {
 customOptions.success(xhttp.response);
 }
 };

 xhttp.open(customOptions.method, customOptions.url, customOptions.async);
 xhttp.setRequestHeader("Content-type", customOptions.contentType);
 (customOptions.method == "GET") ? xhttp.send() : xhttp.send(JSON.stringify(customOptions.data));
 };

 */

//Helper Functions
MyLib.prototype.randBetween = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
MyLib.prototype.randomColor = function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
MyLib.prototype.checkIfMobile = function checkIfMobile(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
MyLib.prototype.isTouch = function isTouch() {
    return !!('ontouchstart' in window) || window.navigator.msMaxTouchPoints > 0;
}
MyLib.prototype.getHashURL = function(){
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    return hash;
  } else {
    return null;
  }
};
MyLib.prototype.getParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
MyLib.prototype.validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
MyLib.prototype.capitalize = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
//Helper that allows to skip the NEW keyword
function G(selector){
  return new MyLib(selector);
}


