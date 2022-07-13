'use strict';

let slideImg = $('.slide_imgBox');

function slideShow() {
  if($(slideImg).hasClass('company')){
    slideImg.removeClass('company');
    slideImg.show(1000);
    slideImg.css('background-image', 'url("/img/news.png")');
    setTimeout(function(){
      slideImg.hide(1000);
    }, 4000);
    slideImg.addClass('news');
  }

  else if ($(slideImg).hasClass('news')){
    slideImg.removeClass('news');
    slideImg.show(1000);
    slideImg.css('background-image', 'url("/img/office.png")');
    setTimeout(function(){
      slideImg.hide(1000);
  }, 4000);
    slideImg.addClass('office');
  }

  else {
    slideImg.removeClass('office');
    slideImg.show(1000);
    slideImg.css('background-image', 'url("/img/company.png")');
    setTimeout(function(){
      slideImg.hide(1000);
    }, 4000);
    slideImg.addClass('company');
  }
}

setTimeout(function(){
  slideImg.hide(1000);
}, 4000);
setInterval(slideShow, 5000);