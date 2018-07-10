<?php
/*
Plugin Name: Woo Plus/Minus Qty
Plugin URI: https://github.com/WestCoastDigital/
Description: Add +/- icons buttons to your WooCommerce input fields
Version: 1.0.0
Author: West Coast Digital
Author URI: https://github.com/WestCoastDigital/
Text Domain: translate
Domain Path: /languages
*/

function wcd_woo_plus_minus_script() {   
    wp_register_style( 'wcd_woo_plus_minus_style', plugin_dir_url( __FILE__ ) . 'css/project.css' );
    wp_register_script( 'wcd_woo_plus_minus_script', plugin_dir_url( __FILE__ ) . 'js/project.js' );
    if ( is_woocommerce() || is_product() || is_shop() || is_cart() || is_checkout() ) {
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'wcd_woo_plus_minus_script' );
        wp_enqueue_style( 'wcd_woo_plus_minus_style' );
    }
}
add_action('wp_enqueue_scripts', 'wcd_woo_plus_minus_script');