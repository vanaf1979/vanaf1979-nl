


<div class="slider swiper-container row">

        <div class="swiper-wrapper">

            <?php
            $slides = get_field( 'slides' , $post->ID );

            if( $slides == false )
            {
                $slides = get_field( 'slides' , 18 );
            }

            foreach( $slides as $slide )
            {
                $image = $slide['slide_image'];
            ?>
            
            <div class="swiper-slide">

                <div class="inner row-center">

                    <article>

                        <?php echo $slide['slide_content']; ?>

                    </article>

                </div>

                <div class="image">

                    <img srcset="<?php echo $image['sizes']['slider-image-small']; ?> 568w, <?php echo $image['sizes']['slider-image-mid']; ?> 768w, <?php echo $image['sizes']['slider-image-large']; ?> 1400w"
                            sizes="(max-width: 568px) 100vw, (max-width: 768px) 100vw, 100vw"
                            src="<?php echo $image['sizes']['slider-image-large']; ?>" alt="<?php echo $image['alt']; ?>">
                </div>

            </div>

            
            <?php
            }
            ?>

        </div>

        <div class="swiper-pagination inactive"></div>
        <div class="swiper-button-next inactive"></div>
        <div class="swiper-button-prev inactive"></div>
        

</div>