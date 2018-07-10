
'use strict';
( function( $ ) {
	$( function() {

		woocommerce_add_to_cart_and_update();

		$( document.body ).on( 'updated_cart_totals', function() {
			woocommerce_add_to_cart_and_update();
		} );

	} );
} )( jQuery );

function woocommerce_add_to_cart_and_update() {
	jQuery( '.woocommerce .quantity' ).append( '<div class="inc button qty-btn">+</div>' );
    jQuery( '.woocommerce .quantity' ).prepend( '<div class="dec button qty-btn">-</div>' );
    jQuery( 'button[name="update_cart"]' ).addClass( 'woo_update_button' );
	jQuery( '.woocommerce .qty-btn' ).on( 'click', function() {
		var $button = jQuery( this ).html(),
			oldValue = jQuery( this ).parent().find( 'input.input-text.qty.text' ).val(),
			upd_cart_btn = jQuery( '.woo_update_button' ),
			newVal = '';

		if ( $button === '+' ) {
			newVal = parseFloat( oldValue ) + 1;
		} else if ( oldValue > 0 ) {
			newVal = parseFloat( oldValue ) - 1;
		} else {
			newVal = 0;
		}
		jQuery( this ).parent().find( 'input.input-text.qty.text' ).attr( 'value', newVal );
		upd_cart_btn.removeAttr( 'disabled' );
		upd_cart_btn.trigger( 'click' );
		upd_cart_btn.val( '...Updating' );
	} );
}