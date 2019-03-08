let navbarBtn = document.querySelector('.navbar-btn');
let sideNavbar = document.querySelector('.side-navbar');
let pageContainer = document.querySelector('.page-container');
let mainNavbar = document.querySelector('#top-navbar');
let banner = document.querySelector('#homeTopBanner');
//let header = document.querySelector('#main-header');

navbarBtn.addEventListener('click', function(){
    sideNavbar.classList.toggle('d-block');
    pageContainer.classList.toggle('change-page-width');
    //header.classList.toggle('change-page-width');
    navbarBtn.classList.toggle('navbar-btn-active');
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      mainNavbar.classList.add('scroll-navbar');
    } else {
        mainNavbar.classList.remove('scroll-navbar');
    }
  }


  var s = skrollr.init();






  