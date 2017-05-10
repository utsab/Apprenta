(function($) {
  
  $(document).ready(function () {
    function reorient(e) {

      // var portrait = (window.orientation % 180 == 0);
      var isMobile = /Mobi/.test(navigator.userAgent); 
      var landscape = window.matchMedia("(orientation: landscape)").matches; 
      debugger
      $("body").css("-webkit-transform",  isMobile && landscape ? "rotate(-90deg)" : "");
    }
    window.onorientationchange = reorient;
    window.setTimeout(reorient, 0); 
  });

})(jQuery); 