<?php defined( 'ABSPATH' ) or die( 'Go eat veggies!' ); ?>

<?php get_template_part('components/header'); ?>

    <body <?php body_class(); ?>>

        <div id="app">

            
            <?php get_template_part('components/main-nav'); ?>

            
            <?php get_template_part('components/slider'); ?>

            
            <?php get_template_part('components/breadcrumbs'); ?>


            <?php get_template_part('components/intro'); ?>

           
            <?php //get_template_part('components/projects'); ?>


            <?php get_template_part('components/parallax'); ?>


            <?php get_template_part('components/writing'); ?>


            <?php get_template_part('components/contact'); ?>


            <?php get_template_part('components/footer'); ?>

        </div>

        <?php wp_footer(); ?>

    </body>

</html>