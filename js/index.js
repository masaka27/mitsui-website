gsap.registerPlugin(ScrollTrigger);

//nav-menu-animation
const navSlide = () => {
  const burger = document.querySelector('.nav-btn');
  const nav = document.querySelector('.header');
  const navLink = document.querySelectorAll('.nav-inner li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animation links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 8 + 0.2
        }s`;
      }
    });
    //burger Toggle
    burger.classList.toggle('burger-open');
  });
};
navSlide();

//fade-animation
const fade = gsap.utils.toArray('.fade');
fade.forEach((act, i) => {
  ScrollTrigger.create({
    trigger: act,
    toggleClass: 'active',
    start: 'top 80%',
    // end: 'bottom top',
    markers: false,
    once: false,
    // toggleActions: 'play none none none'
  });
});

//slide-animation
const reverl = gsap.utils.toArray('.cover-slide-txt');
reverl.forEach((txt, i) => {
  ScrollTrigger.create({
    trigger: txt,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
    once: false,
    // toggleActions: 'play none none none'
  });
});
//img-animation
const images = gsap.utils.toArray('.cover-slide-img');
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
    once: false,
    // toggleActions: 'play none none none'
  });
});
// firstview opening animation
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.header-side', { x: '100%', ease: 'power2.in' })
  // .from('.hero-container', { x: '-100%', ease: 'elastic.out(1, 0.3)' })
  .from('.hero-container', { opacity: '0', x: '-50', ease: 'Power2.easeOut' })
  .from('.section1', { y: '100px', ease: 'bounce' });

// sprit text animation
Splitting();
const targetTxt = document.querySelectorAll('.text-animation');
const xValues = ['0%', '70%', '300%', '0%', '70%', '300%'];
const yValues = ['0%', '70%', '-100%', '0%', '70%', '-100%'];
targetTxt.forEach((current, index, array) => {
  gsap.from(current.querySelectorAll('.char'), {
    scrollTrigger: {
      trigger: current,
      start: 'top 70%',
      end: 'bottom top',
      pin: false,
      scrub: false,
    },
    opacity: 0,
    scale: 0.1,
    x: xValues[index],
    y: yValues[index],
    stagger: {
      amount: 1.5,
    },
  });
});

//TOPへ戻るボタン
(function ($) {
  const pagetop = $('.footer_anc');
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
})(jQuery);

// video
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '503',
    width: '894',
    videoId: 'GQUGYVslGZ4',
    wmode: 'transparent',
    playerVars: {
      loop: '1',
      playlist: 'GQUGYVslGZ4',
      rel: '0',
      showinfo: '0',
      controls: '0',
      color: 'white',
    },
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

function onPlayerStateChange(event) {}

$(function () {
  // $('a[href^="http"]')
  //   .not('[href*="kittaka.co.jp"]')
  //   .click(function () {
  //     window.open(this.href, '');
  //     return false;
  //   });
  // $('.dropdown-toggle').click(function () {
  //   var location = $(this).attr('href');
  //   window.location.href = location;
  //   return false;
  // });

  // var navHeight = $('nav').outerHeight();
  // console.log(navHeight);
  var adjustWidth = $(window).width();
  // var adjustHeight = $(window).height() / 1.25;
  var adjustHeight = $(window).height();
  // adjustHeight -= navHeight;
  console.log(adjustHeight);
  var movieRatio = 16 / 9;
  function movieAdjust() {
    if (adjustHeight > adjustWidth / movieRatio) {
      adjustWidth = adjustHeight * movieRatio;
    }
    $('iframe').css({ width: adjustWidth, height: adjustWidth / movieRatio });
  }
  $(window).on('load resize', function () {
    movieAdjust();
  });
  // $('#video').css({ height: adjustHeight });
});
