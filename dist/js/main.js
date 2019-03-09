// getting els
let navbarBtn = document.querySelector('.navbar-btn');
let sideNavbar = document.querySelector('.side-navbar');
let pageContainer = document.querySelector('.page-container');
let mainNavbar = document.querySelector('#top-navbar');
let dropdownLi = document.querySelectorAll('.dropdown-li');
let dropdownList = document.querySelectorAll('.dropdown-list');

// side navbar show function
navbarBtn.addEventListener('click', function(){
    sideNavbar.classList.toggle('d-block');
    navbarBtn.classList.toggle('navbar-btn-active');
    pageContainer.classList.toggle('change-page-width');
});

// side navbar dropdown function
dropdownLi.forEach(function(el){
  el.addEventListener('click', function(e){
    if(e.target.classList.contains('dropdown-link')){
      e.target.nextSibling.nextSibling.classList.toggle('d-block');
    }
    if(e.target.classList.contains('dropdown-li')){
      e.target.children[1].classList.toggle('d-block');
    }
    if(e.target.classList.contains('fa')){
      e.target.parentElement.nextSibling.nextSibling.classList.toggle('d-block');
    }
    
  });
});

// scroll function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      mainNavbar.classList.add('scroll-navbar');
    } else {
        mainNavbar.classList.remove('scroll-navbar');
    }
  }

  // skrollr init
  var s = skrollr.init();

  // slit slider
  $(function(){
    //Resize:
      $('#homeTopBanner').css({'height':(($(window).height()))+'px'});
        $(window).resize(function(){
          $('#homeTopBanner').css({'height':(($(window).height()))+'px'});
        });
  });

  $(function() {    
    var Page = (function() {
        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $('#Hero').slitslider( {
                onBeforeChange : function( slide, pos ) {
                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );
                }
            } ),
            init = function() {
                initEvents();
            },
            initEvents = function() {
                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {
                    slitslider.next();
                    return false;
                } );
                $navArrows.children( ':first' ).on( 'click', function() {  
                    slitslider.previous();
                    return false;
                } );
            };
            return { init : init };
    })();

    Page.init();

    /**
     * Notes: 
     * 
     * example how to add items:
     */

    /*
    
    var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
    
    // call the plugin's add method
    ss.add($items);

    */

});
// $(window).load(function () {
//     $('#Hero').wrap("<div class='dim-wrap'></div>").attr('data-top', "opacity:1;transform: matrix(1, 0, 0, 1, 0, 0);").attr('data-top-bottom', "opacity: 0.5;transform:matrix(1, 0, 0, 1, 0, 450);");
//     var s = skrollr.init({
//     smoothScrolling: false,
//         forceHeight: false,
//         mobileCheck: function () {
//             return false;
//         }
//     });
// });

  $.Slitslider.defaults = {
  // transitions speed
  speed : 800,
  // if true the item's slices will also animate the opacity value
  optOpacity : false,
  // amount (%) to translate both slices - adjust as necessary
  translateFactor : 230,
  // maximum possible angle
  maxAngle : 25,
  // maximum possible scale
  maxScale : 2,
  // slideshow on / off
  autoplay : true,
  // keyboard navigation
  keyboard : true,
  // time between transitions
  interval : 4000,
  // callbacks
  onBeforeChange : function( slide, idx ) { return false; },
  onAfterChange : function( slide, idx ) { return false; }
};


  