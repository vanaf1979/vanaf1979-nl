

<?php
if( ! is_front_page() )
{
?>
    <div class="breadcrumbs va-grid-full">

        <div class="pure-g va-grid-center">

            <div class="pure-u-1 pure-u-sm-1 pure-u-md-1 pure-u-lg-1 pure-u-xl-1">
                
                <ul>
                    <?php
                    if( function_exists( 'bcn_display_list' ) )
                    {
                        bcn_display_list();
                    }
                    ?>
                </ul>

            </div>

        </div>

    </div>
<?php
}
?>
