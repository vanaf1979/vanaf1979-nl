import Utils from '../../components/utils/index.js';
import inView from 'in-view';
import BigPicture from 'bigpicture';

var Intro = {

    image: null,

    init: function( )
    {
        this.image = Utils.find( '.introbigpicture' );

        if( this.image )
        {
            this.imageInview();
        }
    },


    imageInview: function( )
    {
        inView.offset(-50);

        inView('.introbigpicture').on( 'enter', ( el ) => {
            
            this.doBigpicture();

        })
    },

    
    doBigpicture: function()
    {
        Utils.addEvent( this.image , 'click' , ( e ) => {

            e.preventDefault();

            BigPicture({
                el: e.target,
                imgSrc: e.target.href
            })
        });
    }
}

 
export default Intro;
