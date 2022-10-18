$(document).ready(function() {
  // Hide Loading Screen
  $('.loading span').fadeOut(1000, function() {
    $('.loading').fadeOut(1000, function() {
      $('body').css('overflow','visible');
    });
  });

  let homeCaptionOffset = $('#home .caption').offset().top,
  aboutOffset = $('#about').offset().top;

  $(window).scroll(function() {
    // Handle Navbar Scroll Effect
    if($(window).scrollTop() > homeCaptionOffset) {
      $('#home-navbar').addClass('navbar-scroll');
    }else {
      $('#home-navbar').removeClass('navbar-scroll');
    }

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