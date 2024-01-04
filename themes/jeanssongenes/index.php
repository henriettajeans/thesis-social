<?php

/**
 * The main template file.
 *
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <?php
        if (have_posts()) : while (have_posts()) : the_post();
            endwhile;
        endif;

        ?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
