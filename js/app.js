$(document).foundation()
//Отобраение видео в фоне
$(document).ready(function() {
      var videobackground = new $.backgroundVideo($('.video'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "media/",
        "filename": "stock-footage-fast-changing-futuristic-hud-display-elements-hundreds-of-combinations-for-still-imaginary-great-f",
        "types": ["mp4","ogg","webm"]
      });
    });

//Анимация бутерброда
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
  var menu = document.getElementById("global-menu");
  var hero = document.getElementById("hero");
  var main = document.getElementById("main-content");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      
       (menu.classList.contains("active") === true) ? menu.classList.remove("active") :
       menu.classList.add("active");
        
       (hero.classList.contains("active") === true) ? hero.classList.remove("active") :
       hero.classList.add("active");
        
       (main.classList.contains("hide") === true) ? main.classList.remove("hide") :
       main.classList.add("hide");
    });
  }
 
})();

//Paralax эффекты для главной страницы
$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#top-line--control').css('top',(0-(scrolled*.25))+'px');
    $('.bottom-panel--on_black').css('bottom',(0+(scrolled*.15))+'px');
    $('#top-line--control').css('opacity',(1-(scrolled*.0015)));
    $('#hero .on').css('opacity',(1-(scrolled*.0025)));

}