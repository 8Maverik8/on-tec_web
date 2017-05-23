$(document).foundation()

$(document).ready(function() {
      var videobackground = new $.backgroundVideo($('.video'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "media/",
        "filename": "cloud",
        "types": ["mp4","ogg","webm"]
      });
    });

(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();
    