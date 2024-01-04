<?php


function kubio_ai_get_key() {

	if ( defined( 'KUBIO_AI_KEY' ) ) {
		return KUBIO_AI_KEY;
	}

	return get_option( 'kubio_ai_key', false );
}

function kubio_ai_set_key( $key ) {
	update_option( 'kubio_ai_key', sanitize_text_field( $key ) );
}

require_once __DIR__ . '/utils.php';
require_once __DIR__ . '/SDApi/KubioImageManager.php';
require_once __DIR__ . '/SDApi/KubioCloudSDApi.php';
require_once __DIR__ . '/SDApi/KubioImageGenerate.php';
require_once __DIR__ . '/SDApi/KubioImageSearch.php';
require_once __DIR__ . '/SDApi/KubioImagePrompts.php';

require_once __DIR__ . '/api.php';
require_once __DIR__ . '/SDApi/sd-endpoints.php';

require_once __DIR__ . '/filters/index.php';
require_once __DIR__ . '/admin-tab/tab.php';
