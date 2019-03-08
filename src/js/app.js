
/* Import utilities. */
import utils from './components/utils/index.js';


/* Import components. */
import ScriptLoaders from './components/scriptloaders/index.js';
import HeaderSlider from './components/slider/index.js';
import Intro from './components/intro/index.js';
import Parallax from './components/parallax/index.js';


/* Initialize components. */
utils.domready( () => {

    // Load external scripts and styles.
    ScriptLoaders.init();

    HeaderSlider.init();

    Intro.init();

    Parallax.init();

})