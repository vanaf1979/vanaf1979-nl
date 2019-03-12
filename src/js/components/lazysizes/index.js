
import Utils from '../../components/utils/index.js';
import lazysizes from 'lazysizes';

var LazySizes = {

    init: function() {

        var images = Utils.findAll( 'img[data-sizes]' );

        if( images.lenght > 0 ) {

            this.doLazySizes();

        } else {

            console.debug( 'No lazysizes images found. Returning...' );
            return;

        }

    },

    doLazySizes: function() {

        // Ref: https://github.com/aFarkas/lazysizes/blob/gh-pages/README.md
        lazysizes.init();

    }
}

export default LazySizes