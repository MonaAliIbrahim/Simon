$(document).ready(function() {

  let homeCaptionOffset = $('#home .caption').offset().top,
      skillsSectionOffset = $('.skills-section').offset().top,
      skillsSectionHeight = $('.skills-section').height(),
      fireCounter = false;

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

  $(window).scroll(function() {
    // Handle Navbar Scroll Effect
    if($(window).scrollTop() > homeCaptionOffset) {
      $('#home-navbar').addClass('navbar-scroll');
    }else {
      $('#home-navbar').removeClass('navbar-scroll');
    }
    // Handle progress bar Animation in Skills Section
    if($(window).scrollTop() >= skillsSectionOffset - skillsSectionHeight * 2) {
      showProgressValues();
    }
    // Handle Counter statistics Section
    let statisticsDimensions = document.getElementById('statistics').getBoundingClientRect();
    if($(window).scrollTop() >= statisticsDimensions.top + statisticsDimensions.height) {
      if(!fireCounter) {
        showStatisticsCounter();
        fireCounter = true;
      }
    }
    // Handle backToTop Button
    if($(window).scrollTop() > $('#about').offset().top) {
      $('.move-up-btn').fadeIn(1000);
    }else {
      $('.move-up-btn').fadeOut(1000);
    }
  });

  function showStatisticsCounter() {
    let counterItems = $('#statistics span'),
        counterValues = []; 
    for(let i = 0; i < counterItems.length; i++) {
      counterValues.push($('#statistics span').eq(i).attr('data-target'));
    }
    for(let i = 0; i < counterItems.length; i++) {
      let counter = 1;
      setInterval(() => {
        if(counter <= counterValues[i]) {
          $('#statistics span').eq(i).text(counter);
          if(i != counterItems.length - 1) {
            $('#statistics span').eq(i).append('+');
          }
          counter++;
        }else {
          i++;
        }
      }, 10);
      if(i == counterItems.length - 1) {
        clearInterval();
      }
    }
  }

  function showProgressValues() {
    let progressItems = $('.progress-bar'),
        progressValues = []; 
    for(let i = 0; i < progressItems.length; i++) {
      progressValues.push($('.progress-bar').eq(i).attr('aria-valuenow'));
    }
    for(let i = 0; i < progressItems.length; i++) {
      for(let j = 0; j <= progressValues[i]; j++) {
        $('.progress-bar').eq(i).css({'width': `${j}%`, 'transition': 'all 2s'});
      }
    }
  }

  // Toggle Color Select Options
  $('.color-switcher .icon').click(function() {
    currentRight = $('.color-switcher').css('right');
    if(currentRight == '0px') {
      $('.color-switcher').animate({right:'-185px'});
      $('.color-switcher').css('box-shadow' , 'none');
    }else {
      $('.color-switcher').animate({right:'0px'});
      $('.color-switcher').css('box-shadow' , '0 0.5rem 1rem rgb(0 0 0 / 15%)');
    }
  })

  // Change Theme Color
  $('.color-switcher button').click(function() {
    let themeColor = $(this).css('background-color');
    document.querySelector(':root').style.setProperty('--primary-color', themeColor);
  })

  // Set Default Theme Color 
  $('#resetColorBtn').click(function() {
    document.querySelector(':root').style.setProperty('--primary-color', '#20C997');
  })

  // Bootstrap Tooltip 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  const tooltip = new bootstrap.Tooltip('button', {
    boundary: document.body
  });
});