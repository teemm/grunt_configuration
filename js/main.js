(function(window,document){
  "use strict";
  var windowWidth = document.documentElement.clientWidth,
      windowHeight = document.documentElement.clientHeight;

  var htmlClassHandler = function () {
    if(isMobile){
      $('html').addClass('mobile')
    }
    if(!G().isTouch()){
      $('html').addClass('no-touch');
    }
  };

  var main = function(){
    htmlClassHandler();
  };
  
  document.addEventListener('DOMContentLoaded', function(){
    main();
  });

  window.addEventListener('load', function(e) {
    $('html').addClass("loaded");
  });

  window.addEventListener('resize', function(e) {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  });

})(window,document);