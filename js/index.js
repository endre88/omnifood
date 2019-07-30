$(document).ready(function() {
   $(".js--section-features").waypoint(
      function(direction) {
         if (direction == "down") {
            $("nav").addClass("sticky");
         } else {
            $("nav").removeClass("sticky");
         }
      },
      {
         offset: "60px;"
      }
   );

   /*I'm hungry és a Show me more gombok eseménye*/
   $(".js--scroll-to-plans").click(function() {
      $("html,body").animate(
         { scrollTop: $(".js--section-plans").offset().top },
         2000
      );
   });

   $(".js--scroll-to-start").click(function() {
      $("html,body").animate(
         { scrollTop: $(".js--section-features").offset().top },
         2000
      );
   });

   /* a nav menu gombjai*/
   /*
   $('.js--scroll-to-food').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-food').offset().top},2000);
        });
   $('.js--scroll-to-how').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-how').offset().top},2000);
        });
   $('.js--scroll-to-cities').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-cities').offset().top},2000);
        });
   $('.js--scroll-to-signup').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-signup').offset().top},2000);
        });*/

   /*-----Smooth scrolling with jquery-----*/

   $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
         // On-page links
         if (
            location.pathname.replace(/^\//, "") ==
               this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
         ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
               ? target
               : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
               // Only prevent default if animation is actually gonna happen
               event.preventDefault();
               $("html, body").animate(
                  {
                     scrollTop: target.offset().top
                  },
                  1000,
                  function() {
                     // Callback after animation
                     // Must change focus!
                     var $target = $(target);
                     $target.focus();
                     if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                     } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                     }
                  }
               );
            }
         }
      });

   /* animate on scroll*/

   $(".js--wp-1").waypoint(
      function(direction) {
         $(".js--wp-1").addClass("animated fadeIn");
      },
      { offset: "50%" }
   );

   $(".js--wp-2").waypoint(
      function(direction) {
         $(".js--wp-2").addClass("animated fadeInUp");
      },
      { offset: "50%" }
   );

   $(".js--wp-3").waypoint(
      function(direction) {
         $(".js--wp-3").addClass("animated fadeIn");
      },
      { offset: "50%" }
   );

   $(".js--wp-4").waypoint(
      function(direction) {
         $(".js--wp-4").addClass("animated pulse");
      },
      { offset: "50%" }
   );

   $(".js--nav-icon").click(function() {
      var nav = $(".js--main-nav");
      var icon = $(".js--nav-icon i");
      nav.slideToggle(200);
      if (icon.hasClass("ion-navicon-round")) {
         icon.addClass("ion-close-round");
         icon.removeClass("ion-navicon-round");
      } else {
         icon.removeClass("ion-close-round");
         icon.addClass("ion-navicon-round");
      }
   });

   var osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM(),
      opacity: 1,
      attribution:
         '&copy; <a href="http://www.openstreetmap.org/copyright" target=_blank>OpenStreetMap közreműködők</a>'
   });

   var view = new ol.View({
      center: ol.proj.transform([20, 47.5], "EPSG:4326", "EPSG:3857"),
      zoom: 9
   });

   var map = new ol.Map({
      target: "map"
   });
   map.addLayer(osmLayer);
   map.setView(view);

   var marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([19, 47.5])) // Cordinates of New York's Town Hall
   });
   var vectorSource = new ol.source.Vector({
      features: [marker]
   });

   var markerVectorLayer = new ol.layer.Vector({
      source: vectorSource
   });
   map.addLayer(markerVectorLayer);
});
