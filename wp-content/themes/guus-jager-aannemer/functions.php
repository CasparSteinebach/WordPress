<?php
function my_theme_enqueue_scripts() {
  wp_enqueue_script('my-theme-bundle', get_template_directory_uri() . '/dist/bundle.js', array(), null, true);
  wp_enqueue_script('my-theme-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');

function mytheme_enqueue_styles() {
  wp_enqueue_style( 'mytheme-style', get_template_directory_uri() . '/assets/css/main.css' );
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_styles' );

function my_theme_setup() {
    // Voeg thema-ondersteuning toe
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'my_theme_setup');
