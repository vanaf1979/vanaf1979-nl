
import Utils from '../../components/utils/index.js';

var ScriptLoaders = {

    init: function( ) {

        // Add Google Analytics
        //this.addGoogleAnalytics();

        // Register Service Worker
        this.registerServiceworkerJs();

        // Add footer css
        this.addFooterCss();

    },


    registerServiceworkerJs: function()
    {
        if ( 'serviceWorker' in navigator )
        {
            window.addEventListener( 'load' , () => {
                navigator.serviceWorker.register('/app/themes/vanaf1979/public/js/sw.js');
                console.log('Service worker registered');
            });
        }
    },


    addFooterCss: function()
    {
        // Add footer css styles.
        Utils.addStyle( '/app/themes/vanaf1979/public/css/footer.css' , 'body' , null );
    },


    addGoogleAnalytics: function()
    {
        // Append and initialize Google Analytics.
        Utils.addScript( 'https://www.googletagmanager.com/gtag/js?id=UA-75868924-1' , () => {
            window.dataLayer = window.dataLayer || [];
            function gtag()
            {
                dataLayer.push(arguments);
            }
            gtag( 'js' , new Date() );
            gtag( 'config' , 'UA-75868924-1' );
        });
    },
}

 
export default ScriptLoaders;
