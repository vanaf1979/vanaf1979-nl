<?php defined( 'ABSPATH' ) or die( 'Go eat veggies!' ); ?>

<?php get_template_part('components/header'); ?>

    <body <?php body_class(); ?>>

        <div id="app">

            
            <?php get_template_part('components/main-nav'); ?>

            
            <?php get_template_part('components/slider'); ?>

            
            <?php get_template_part('components/breadcrumbs'); ?>


            <div class="article va-grid-full">

                <div class="pure-g va-grid-center">

                    <div class="pure-u-1 pure-u-sm-2-3 pure-u-md-2-3 pure-u-lg-2-3 pure-u-xl-2-3">

                        <article>

                            <h1><?php echo $post->post_title; ?></h1>

                            <?php echo $theme->get_content( $post->ID ) ?>

                        </article>

                    </div>

                    <div class="sidebar pure-u-1 pure-u-sm-1-3 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-3">

                        <section>

                            <h2>Recent</h2>

                            <ul>
                                <li>
                                    <a href="">WordPress Dev Monthly Recap December</a>
                                </li>
                                <li>
                                    <a href="">WordPress Dev Monthly Recap December</a>
                                </li>
                                <li>
                                    <a href="">WordPress Dev Monthly Recap December</a>
                                </li>
                                <li>
                                    <a href="">WordPress Dev Monthly Recap December</a>
                                </li>
                            </ul>

                        </section>

                    </div>

                </div>

            </div>


            <?php get_template_part('components/contact'); ?>


            <?php get_template_part('components/footer'); ?>

        </div>

        <?php wp_footer(); ?>

    </body>

</html>