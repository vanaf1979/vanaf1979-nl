import Utils from '../../components/utils/index.js';
import inView from 'in-view';
import Swiper from 'swiper';
import anime from 'animejs';

var HeaderSlider = {

    swiper: null,
    slider: null,


    init: function()
    {
        this.slider = Utils.find( '.swiper-container' );

        // Is the slider present on the page?
        if( this.slider )
        {
            var slides = Utils.findAll( '.swiper-slide' , this.slider );
            
            // Are there multiple slides?
            if( slides.length > 1 )
            {
                this.sliderInView();
            }
            else
            {
                console.debug( 'Only one slide detected. Adding Swiper is pointless' );
                return;
            }
        }
        else
        {
            console.debug( 'No slider detected.' );
            return;
        }
    },


    sliderInView: function()
    {
        inView.offset(-50);

        inView( '.swiper-container' ).on( 'enter', ( el ) => {
            
            this.activateSwiper();

        }).on( 'exit', ( el ) => {
            
            this.deactivateSwiper();

        })
    },


    activateSwiper: function()
    {
        if( ! this.swiper )
        {
            // Reveal the Swiper controls.
            this.activateSwiperControls(); 

            // Initialize Swiper.
            this.swiper = new Swiper( this.slider , {
                slidesPerView: 1,
                spaceBetween: 0,
                grabCursor: true,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: Utils.find( '.swiper-pagination' , this.slider ),
                    clickable: true,
                },
                navigation: {
                    nextEl: Utils.find( '.swiper-button-next' , this.slider ),
                    prevEl: Utils.find( '.swiper-button-prev' , this.slider ),
                },
            });
        
            // Attach Swiper event handlers.
            this.handleSwiperEvents();
        }
    },


    activateSwiperControls: function()
    {
        var pagination = Utils.find( '.swiper-pagination' , this.slider );
        pagination.classList.remove('inactive');

        var buttonNext = Utils.find( '.swiper-button-next' , this.slider );
        buttonNext.classList.remove('inactive');

        var buttonPrev = Utils.find( '.swiper-button-prev' , this.slider );
        buttonPrev.classList.remove('inactive');
    },


    handleSwiperEvents: function()
    {
        this.swiper.on('slideChangeTransitionStart', () => {
            
            this.animateSlideContent( this.swiper.slides[ this.swiper.activeIndex ] );

        });
    },


    animateSlideContent: function( slide )
    {
        var innerEllements = Utils.findAll( '.inner article > *', slide);
        anime({
            easing: 'easeInOutQuad',
            targets: innerEllements,
            translateY: [-80, 0],
            opacity: [0, 1],
            duration: 500,
            delay: function(el, i, l) {
                return i * 150;
            },
        });
    },


    deactivateSwiper: function()
    {
        if( this.swiper )
        {
            this.swiper.destroy( true , false );
            this.swiper = null;
        }
    }
}


export default HeaderSlider;

