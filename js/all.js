$(function () {

  new WOW().init();
  var s = skrollr.init();

  if ($(window).width() <= 768) {
    s.destroy();
}

  $("[data-fancybox]").fancybox({
    loop: true
  });

  // toTop click
  $('#to-top .button').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });


  const hamburger = $('#hamburger');
  const nav = $('#nav');
  const navcircle = $('.nav-circle');
  const navText = $('.nav-container a');


  hamburger.click(function () {
    $(this).toggleClass('click');
    if (nav.hasClass("show")) {
      nav.stop().delay(300).animate({
        width: "0",
        opacity: "0"
      }, 500);
      navcircle.stop().animate({
        width: "0",
        height: "0",
        opacity: "0"
      }, 500);
      navText.stop().animate({
        opacity: "0",
      }, 1000);

    } else {
      nav.stop().animate({
        width: "100%",
        opacity: ".9"
      }, 500);

      navcircle.stop().delay(100).animate({
        width: "100vw",
        height: "100vw",
        opacity: "1"
      }, 500);

      navText.stop().delay(600).animate({
        opacity: "1",
      }, 1000);
    }
    nav.toggleClass("show");
  });

  navText.click(function () {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 700);
    hamburger.click();
  });


});