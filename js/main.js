$(function () {

  //create the slider
  const slides = $('header .title');
  var counter = 0;
  $('header .next').click(nextSlid);
  $('header .prev').click(prevSlid);
  function nextSlid(){
    if(counter === slides.length - 1){
      counter = 0;
    } else{
      counter++;
    }
    $('.slide').removeClass('slide');
    setTimeout(function(){
      $(slides[counter]).addClass('slide');
    }, 500);
    changeBg(counter);
  };
  function prevSlid(){
    if(counter === 0){
      counter = slides.length - 1
    } else{
      counter--;
    }
    $('.slide').removeClass('slide');
    setTimeout(function(){
      $(slides[counter]).addClass('slide');
    }, 500);
    changeBg(counter);
  };
  //change the background
  function changeBg(number){
    $('header').css('background-image', `url('images/bg${number}.jpg')`);
  };
  //auto slider
  setInterval(function(){
    nextSlid()
  }, 8000)
  //show yhe navbar on click
  var upperbar = $('.upperbar'),
      head = $('header'),
      shearch = $('.shearch'),
      humberger = $('.upperbar .navbar .humberger'),
      nav = $('nav');

  $(humberger).on('click', function () {
    $(this).toggleClass('active');
    $(nav).toggleClass('active');
    $(nav).fadeToggle('active');
  });

  //fix the upperbar  on scroll
  var headWidthMax = head.innerHeight(),
      headWidthMin = head.innerHeight();

  $(window).on('scroll', function () {
    if($(this).scrollTop() > headWidthMin) {
      upperbar.addClass('fixed');
    } else {
      upperbar.removeClass('fixed');
    }
  });
  if($(this).scrollTop() > headWidthMin) {
    upperbar.addClass('fixed');
  } else {
    upperbar.removeClass('fixed');
  }

  //add parallex scorll effect to the Header
  $(window).scroll(function () {
    let offset = window.pageYOffset;
    $('header').css('background-positionY', (offset * 0.5) + 'px');
  });

  //make links actives on click
  $('.nav-links li').click(function () {
    $(nav).removeClass('active');
    $(humberger).removeClass('active');

    $('html, body').animate({
      scrollTop: $($(this).data('link')).offset().top - upperbar.outerHeight() - 15
    }, 1000);
    $(nav).fadeOut('active');
  });

  //scrool to top button
  $('.to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  })

  //activate the animation on scroll
  AOS.init({
    offset: 200,
    duration: 900
  });

  //Call the nice scorll
  $(function() {
    $("body").niceScroll({
      cursorcolor: "#ffb606",
      cursorwidth: "8px",
      cursorborder: "none",
      scrollspeed: 10
    });
  });

})
