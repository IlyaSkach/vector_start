function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    $("footer").css({
      bottom: "0px",
    });
  } else {
    $("footer").css({
      bottom: "-" + heightFooter + "px",
    });
  }
}

$(document).ready(function () {
  function initParallax() {
    var windowHeight = $(window).height(),
      footerHeight = $("footer").height(),
      heightDocument = windowHeight + $(".content").height() + footerHeight;

    // Определяем размер элемента для анимации
    $("#scroll-animate, #scroll-animate-main").css({
      height: heightDocument + "px",
    });

    // Определяем размер элементов header и content
    $("header").css({
      height: windowHeight + "px",
      "line-height": windowHeight + "px",
    });

    $(".wrapper-parallax").css({
      "margin-top": windowHeight + "px",
    });

    scrollFooter(window.scrollY, footerHeight);
  }

  // Инициализация при загрузке
  initParallax();

  // При прокрутке
  $(window).on("scroll", function () {
    var scroll = window.scrollY,
      windowHeight = $(window).height(),
      heightDocument =
        windowHeight + $(".content").height() + $("footer").height();

    $("#scroll-animate-main").css({
      top: "-" + scroll + "px",
    });

    $("header").css({
      "background-position-y": 50 - (scroll * 100) / heightDocument + "%",
    });

    scrollFooter(scroll, $("footer").height());
  });

  // При изменении размера окна
  $(window).on("resize", function () {
    initParallax();
  });
});
