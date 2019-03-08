import Utils from '../../components/utils/index.js';
import inView from 'in-view';
import jarallax from 'jarallax';

var Intro = {

    parallax: null,

    
    init: function( )
    {
        this.parallax = Utils.find( '.home-graphic' );

        if( this.parallax )
        {
            this.parallaxInview();
        }
    },


    parallaxInview: function( )
    {
        inView.offset(-50);

        inView('.home-graphic').on( 'enter', ( el ) => {
            
            this.doParallax();

        })
    },


    doParallax: function()
    {
        jarallax.jarallax( this.parallax , {
            speed: 0.2
        });
    }
}

 
export default Intro;

