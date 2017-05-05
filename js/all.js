/* ---------------------------------------------
 Scripts initialization
 --------------------------------------------- */
;(function ($) {
  'use strict'

  $(window).load(function () {
    // Page loader
    $('.page-loader div').delay(0).fadeOut()
    $('.page-loader').delay(200).fadeOut('slow')
  })

  $(document).ready(function () {
    $('.newLogo').click(function () {
      $('.fall-off').addClass('hinge')
    })

    // $('.newLogo').mouseover(function () {
    //   $('.wpwd-letters').addClass('color-change-5x')
    // })
    // $('.newLogo').mouseleave(function () {
    //   $('.wpwd-letters').removeClass('color-change-5x')
    // })

    setTimeout(function () {
      $('.home-content').css('background-color', 'transparent')
      // $('.navbar-right').css('animation-delay','4s');
    }, 4000)

    $('.homebutton').mouseover(function () {
      $('.homebutton i').removeClass('ion-ios-paperplane-outline')
      $('.homebutton i').addClass('ion-ios-paperplane')
    })
    $('.homebutton').mouseleave(function () {
      $('.homebutton i').addClass('ion-ios-paperplane-outline')
      $('.homebutton i').removeClass('ion-ios-paperplane')
    })

    /* ---------- RESIZE TRIGGER ---------- */
    $(window).trigger('resize')

    /* ---------- PARALLAX ---------- */
    $(window).stellar()

    /* ---------- COUNTER ---------- */
    $('.timer').counterUp({
      delay: 10,
      time: 5000
    })

    /* ---------- Masnory ---------- */

    $('.grid').isotope({
      itemSelector: '.grid-item'
    })

    /* ---------- ANIMSITION - TRANSITION BETWEEN PAGES ---------- */
    $('.animsition').animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
      loading: true,
      loadingParentElement: 'body', // animsition wrapper element
      loadingClass: 'animsition-loading',
      unSupportCss: [ 'animation-duration',
        '-webkit-animation-duration',
        '-o-animation-duration'
      ],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body'
    })

    $(function () {
      $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this)
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo')
        event.preventDefault()
      })
    })

    /* ---------- Clients Slider ---------- */
    $('#owl-clients').owlCarousel({
      autoPlay: 1500,
      pagination: false,
      items: 6, // 10 items above 1000px browser width
      itemsDesktop: [1000, 5], // 5 items between 1000px and 901px
      itemsDesktopSmall: [900, 4], // 3 items betweem 900px and 601px
      itemsTablet: [600, 3], // 2 items between 600 and 0
      itemsMobile: [320, 1] // itemsMobile disabled - inherit from itemsTablet option
    })

    /* ---------- Testimonials Slider ---------- */
    $('#owl-testimonials').owlCarousel({
      singleItem: true,
      autoPlay: true,
      pagination: false
    })

    /* ---------- Slider ---------- */
    $('.slider').owlCarousel({
      navigation: true, // Show next and prev buttons
      autoPlay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      navigationText: ['&larr;', '&rarr;']

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    })

    /* ----- Video PopUp ------- */
    $('.video-pop-up').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    })

    /* ---------- ROTATE TEXT ---------- */
    $('.rotate').textrotator({
      animation: 'flipUp', // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ',', // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.
    })
  })

  $(window).resize(function () {
    height100_init()
  })

  /* ---------------------------------------------
   PAGE SCROLL
   --------------------------------------------- */

  smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset: 70
  })

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click

  $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
    $('.navbar-toggle:visible').click()
  })

  /* ---------------------------------------------
   HEIGHT 100%
   --------------------------------------------- */

  function height100_init () {
    (function ($) {
      $('.height-full').height($(window).height() + 100)
    })(jQuery)
  }

  /* ---------------------------------------------
   WOW ANIMATED
   --------------------------------------------- */
  $('.video-container').fitVids()

  /* ---------------------------------------------
   WOW ANIMATED
   --------------------------------------------- */

  var wow = new WOW(
    {
      mobile: false // trigger animations on mobile devices (default is true)
    }
  )
  wow.init()

  /* ---------- CONTACT FORM VALIDATION ---------- */

  $('input,textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault() // prevent default submit behaviour
      // get values from FORM
      var name = $('input#name').val()
      var email = $('input#email').val()
      var title = $('input#title').val()
      var message = $('textarea#message').val()
      var firstName = name // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ')
      }
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzD5JrABBCgBt3aRSROjr3DR9TL2H_mKd93DgQWC8dEjpELssE/exec',
        // url: "contact.php",
        type: 'POST',
        data: {
          name: name,
          title: title,
          email: email,
          message: message
        },
        cache: false,
        success: function () {
          // Success message
          $('#success').html("<div id='success-box' class='alert alert-success'>")
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append('</button>')
          $('#success > .alert-success')
            .append('<strong>Thank You! Your message has been sent. </strong>')
          $('#success > .alert-success')
            .append('</div>')

          // clear all fields
          $('#contactForm').trigger('reset')
        },
        error: function () {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>")
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append('</button>')
          $('#success > .alert-danger').append('<strong>Sorry ' + firstName + ', it seems that my mail server is not responding. Please try again later!')
          $('#success > .alert-danger').append('</div>')
          // clear all fields
          $('#contactForm').trigger('reset')
        }
      })
    },
    filter: function () {
      return $(this).is(':visible')
    }
  })

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  /* When clicking on Full hide fail/success boxes */
  $('#name').focus(function () {
    $('#success').html('')
  })
})(jQuery)
