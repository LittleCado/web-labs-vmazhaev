$(document).ready(function() {
    var margin = 100; // переменная для контроля докрутки, столько пикселей прокрутится дополнительно после якоря
    $("a.scroller").click(function() { // тут пиши условия, для всех ссылок или для конкретных
       $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
        },
        {
            duration: 1000, // тут можно контролировать скорость
            easing: "swing"
        });
       return false;
    });
  });
