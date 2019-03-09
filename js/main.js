let navbarBtn = document.querySelector('.navbar-btn');
let sideNavbar = document.querySelector('.side-navbar');
let pageContainer = document.querySelector('.page-container');
let mainNavbar = document.querySelector('#top-navbar');
let banner = document.querySelector('#homeTopBanner');
let dropdownLi = document.querySelectorAll('.dropdown-li');
let dropdownList = document.querySelectorAll('.dropdown-list');
//let header = document.querySelector('#main-header');
// console.log(banner);

navbarBtn.addEventListener('click', function(){
    sideNavbar.classList.toggle('d-block');
    //pageContainer.classList.toggle('change-page-width');
    //banner.classList.toggle('change-page-width');
    //header.classList.toggle('change-page-width');
    navbarBtn.classList.toggle('navbar-btn-active');

    // banner.forEach(function(el){
    //   el.classList.toggle('change-page-width');
    // })
});

dropdownLi.forEach(function(el){
  el.addEventListener('click', function(e){
    if(e.target.classList.contains('dropdown-link')){
      e.target.nextSibling.nextSibling.classList.toggle('d-block');
      
    }
     
    if(e.target.classList.contains('dropdown-li')){
      e.target.children[1].classList.toggle('d-block');
    }
    
  });
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






  