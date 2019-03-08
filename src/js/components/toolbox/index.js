

/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function find( selector , context ) {

    return ( context || document ).querySelector( selector );

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function findAll( selector , context ) {

    return ( context || document ).querySelectorAll( selector );

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function forEach( list , callback ) {

    if( Object.prototype.toString.call( list ) === '[object Array]' )
    {
        for ( var i = 0 ; i < list.length ; i++ )
        {
            callback( list[i] );
        }
    }
    else if( Object.prototype.toString.call( list ) === '[object Object]' )
    {
        for ( var prop in list )
        {
            if( list.hasOwnProperty( prop ) )
            {
                callback( prop );
            };
        }
    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function getCookie( name ) {
    
    var v = document.cookie.match( '(^|;) ?' + name + '=([^;]*)(;|$)' );
    return v ? v[2] : null;

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function setCookie( name , value , days ) {

    var d = new Date;
    d.setTime( d.getTime() + 24 * 60 * 60 * 1000 * days );
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function deleteCookie( name ) {

    setCookie( name, '' , -1 );

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function addEvent( ellement , type , callback ) {
    
    if ( ellement.attachEvent ) {

        ellement.attachEvent( 'on' + type , callback );

    } else {

        ellement.addEventListener( type , callback );

    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function removeEvent( ellement , type , callback ) {
    
    if ( ellement.detachEvent ) {

        ellement.detachEvent( 'on' + type , callback );

    } else {

        ellement.removeEventListener( type , callback );

    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function triggerEvent( el , type ) {
    
    if ( 'createEvent' in document ) {

        // modern browsers, IE9+
        var e = document.createEvent( 'HTMLEvents' );
        e.initEvent( type , false , true );
        el.dispatchEvent( e );

    } else {

        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent( 'on' + e.eventType , e );

    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function domReady( fn ) {

    if ( document.readyState != 'loading' ) {

        fn();

    } else if ( document.addEventListener ) {

        addEvent( document , 'DOMContentLoaded' , fn );

    } else {

        addEvent( document , 'onreadystatechange' , function() {

            if ( document.readyState != 'loading' ) {
                
                fn();

            }

        })

    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function trim( string ) {

    if ( typeof string === "string" )
    {
        return string.replace( /^\s+|\s+$/g , '' );
    }
    else
    {
        return string;
    }

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function addStyle( style = null , parent = null , callback = null ) {
    
    var element = document.createElement( 'link' );
    element.type = 'text/css';
    element.rel = 'stylesheet';
    element.href = style;

    if ( ! parent )
    {
        parent = 'head';
    }

    if( callback != null && typeof callback === "function" )
    {
        element.onload = function()
        {
            callback()
        };
    }

    document[parent].appendChild(element);

}


/**
 * Description.
 *
 * @since   1.0.0
 * @param   {type}  objectVar   Description.
 * @return  {type}  Description.
 */
export function addScript( script = null , callback = null ) {
    
    var element = document.createElement( 'script' );
    element.type = 'text/javascript';
    element.async = true;
    element.src = script;
    parent = 'body';

    if( callback != null && typeof callback === "function" )
    {
        element.onload = function()
        {
            callback()
        };
    }

    document[parent].appendChild(element);

}