<?php
/*!
Theme Name:         Va79 Base theme
Theme URI:          https://npo.vanaf1979.nl/
Description:        A base WordPress theme.
Version:            0.1.0
Author:             Vanaf1979
Author URI:         https://vanaf1979.nl
Text Domain:        va79-base-theme
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/


/* Run functions class */
require_once get_template_directory() . '/functionsphp/class-functionsphp.php';

function run_functions()
{
	$functions = new Functionsphp();
	$functions->run();
}
run_functions();


require_once get_template_directory() . '/functionsphp/class-functionsphp-utils.php';

global $theme;
$theme = new Theme_Utils();
set_query_var( 'theme' , $theme );
?>
