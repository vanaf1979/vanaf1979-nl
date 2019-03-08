<div class="main-nav row">

    <div class="pure-g row-center">

        <div class="logo pure-u-1 pure-u-sm-1-4 pure-u-md-1-4 pure-u-lg-1-4 pure-u-xl-1-4">
            
            <a href="/">VA79</a>

        </div>

        <div class="nav pure-u-1 pure-u-sm-3-4 pure-u-md-3-4 pure-u-lg-3-4 pure-u-xl-3-4">
            
            <?php //wp_page_menu('show_home=Home&menu_class=mainmenu&sort_column=menu_order&exclude=1&depth=1&exclude_tree=1'); ?>
            <?php wp_nav_menu( array( 'menu_class' => 'menu hor right' , 'theme_location' => 'header-menu' ) ); ?>

            <?php 
            $lang = pll_the_languages(array('raw'=>1));
            ?>
            <ul class="lang menu hor right">
                <li>
                    <a href="<?php echo $lang['nl']['url']; ?>">Dutch</a>
                </li>
                <li>
                    <a href="<?php echo $lang['en']['url']; ?>">English</a>
                </li>
            </ul>
        </div>

    </div>
        
</div>