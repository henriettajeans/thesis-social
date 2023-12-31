<?php

/**
* Single Topic Content Part
*
* @package bbPress
* @subpackage Theme
*/

?>

<div id="bbpress-forums">

	<div class="youzify-bbp-topic-head">
		<?php bbp_breadcrumb(); ?>
		<?php youzify_bbp_forum_topic_head() ?>
	</div>

	<?php do_action( 'bbp_template_before_single_topic' ); ?>

	<?php if ( post_password_required() ) : ?>

		<?php bbp_get_template_part( 'form', 'protected' ); ?>

	<?php else : ?>

		<?php if ( bbp_show_lead_topic() ) : ?>

			<?php bbp_get_template_part( 'content', 'single-topic-lead' ); ?>

		<?php endif; ?>

		<?php if ( bbp_has_replies() ) : ?>

			<?php bbp_get_template_part( 'loop',       'replies' ); ?>

			<?php bbp_get_template_part( 'pagination', 'replies' ); ?>

		<?php endif; ?>

		<?php bbp_topic_tag_list( false, array( 'sep' => '', 'before' => sprintf( '<div class="bbp-topic-tags youzify-bbp-box"><div class="youzify-tags-title youzify-bbp-box-title"><i class="fas fa-tags"></i>%1s</div><div class="youzify-bbp-box-content">', __( 'Topic tags', 'youzify' ) ) , 'after' => '</div></div>' ) ); ?>

		<?php bbp_get_template_part( 'form', 'reply' ); ?>

	<?php endif; ?>

	<?php do_action( 'bbp_template_after_single_topic' ); ?>
</div>
