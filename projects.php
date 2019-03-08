<?php
/*
Template Name: Projects
Template Post Type: page
*/
?>
<?php defined( 'ABSPATH' ) or die( 'Go eat veggies!' ); ?>

<?php get_template_part('components/header'); ?>

    <body <?php body_class(); ?>>

        <div id="app">

            
            <?php get_template_part('components/main-nav'); ?>

            
            <?php get_template_part('components/slider'); ?>

            
            <?php get_template_part('components/breadcrumbs'); ?>


            <?php get_template_part('components/projects'); ?>


            <?php get_template_part('components/contact'); ?>


            <?php get_template_part('components/footer'); ?>

        </div>

        <?php wp_footer(); ?>

    </body>

</html>