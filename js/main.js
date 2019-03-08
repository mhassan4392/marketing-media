let navbarBtn = document.querySelector('.navbar-btn');
let sideNavbar = document.querySelector('.side-navbar');
let pageContainer = document.querySelector('.page-container');
let mainNavbar = document.querySelector('#top-navbar');
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






  $(function() {
      
    var Page = (function() {

      var $navArrows = $( '#nav-arrows' ),
        $nav = $( '#nav-dots > span' ),
        slitslider = $( '#Hero' ).slitslider( {
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

          $nav.each( function( i ) {
          
          $( this ).on( 'click', function( event ) {
            
            var $dot = $( this );
            
            if( !slitslider.isActive() ) {

              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );
            
            }
            
            slitslider.jump( i + 1 );
            return false;
          
          } );
          
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
  $(window).load(function () {
    $('#Hero').wrap("<div class='dim-wrap'></div>").attr('data-top', "opacity:1;transform: matrix(1, 0, 0, 1, 0, 0);").attr('data-top-bottom', "opacity: 0.5;transform:matrix(1, 0, 0, 1, 0, 450);");
    var s = skrollr.init({
    smoothScrolling: false,
      forceHeight: false,
      mobileCheck: function () {
        return false;
      }
    });
  });