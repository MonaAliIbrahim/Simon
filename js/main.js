$(document).ready(function() {
  // Hide Loading Screen
  $('.loading span').fadeOut(1000, function() {
    $('.loading').fadeOut(1000, function() {
      $('body').css('overflow','visible');
    });
  });

  // Title Animation in Home Section
  new Typed('.home-title', {
    strings: ['I\'m simone olivia ','I\'m a freelancer.','I\'m a photographer.','I\'m a designer.'],
    smartBackspace: true,
    typeSpeed: 90,
    backDelay: 700,
    backSpeed: 90,
    loop: true,
  });

  // Firing Fun wow.js
  new WOW().init();

  // Hide Navbar after Click Event
  $('#home-navbar .nav-item').click(function() {
    $(this).children().addClass('active');
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').attr('aria-expanded','false');
  });

  // Handle Select Options

  let homeCaptionOffset = $('#home .caption').offset().top,
  aboutOffset = $('#about').offset().top;

  $(window).scroll(function() {
    // Handle Navbar Scroll Effect
    if($(window).scrollTop() > homeCaptionOffset) {
      $('#home-navbar').addClass('navbar-scroll');
    }else {
      $('#home-navbar').removeClass('navbar-scroll');
    }

    // Handle Counter

    // Handle progress bar

    // Handle backToTop Button
    if($(window).scrollTop() > aboutOffset) {
      $('.move-up-btn').fadeIn(1000);
    }else {
      $('.move-up-btn').fadeOut(1000);
    }
  });

  // Bootstrap Tooltip 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  const tooltip = new bootstrap.Tooltip('button', {
    boundary: document.body
  });
});