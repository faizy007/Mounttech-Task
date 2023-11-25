$(document).ready(function() {

    var util = {
      scrollMenuIds: $("a.nav-link[href]"),
  
      mobileMenu: function() {
        $("#nav").toggleClass("nav-visible");
      },
  
      windowResize: function() {
        if ($(window).width() > 800) {
          $("#nav").removeClass("nav-visible");
        }
      },
  
      scrollEvent: function() {
        var scrollPosition = $(document).scrollTop();
  
        util.scrollMenuIds.each(function() {
          var link = $(this),
            container = link.attr("href"),
            containerOffset = $(container).offset().top,
            containerHeight = $(container).outerHeight(),
            containerBottom = containerOffset + containerHeight;
  
          if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
            link.addClass("active");
          } else {
            link.removeClass("active");
          }
        });
      }
    };
  
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);

    // $('.accordion-header').click(function() {
    //     $(this).next('.accordion-content').slideToggle();
    //   });
      $('.accordion-header').click(function() {
        var accordionId = $(this).parent().attr('id');
        $('.navbar .nav-link').removeClass('active');
        $('.navbar .nav-link[data-target="' + accordionId + '"]').addClass('active');
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
        $('.accordion-header').not(this).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();
      });

      var navbar = $(".navbar-top");
      var stickyOffset = navbar.offset().top;

      // Function to add sticky class when scrolling down
      function stickNavbar() {
        if ($(window).scrollTop() > stickyOffset) {
          navbar.addClass("sticky");
        } else {
          navbar.removeClass("sticky");
        }
      }

      // Listen for scroll events and call stickNavbar function
      $(window).scroll(function() {
        stickNavbar();
      });

  });
  