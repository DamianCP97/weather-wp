<?php
/*
Plugin Name: Weather WP
Description: Display the weather on your WordPress.
Version: 1.0
Author: Damián Caamaño
Author URI: https://www.linkedin.com/in/dami%C3%A1n-caama%C3%B1o-pazos-a543a71b3/
*/

// Función para agregar scripts y estilos en WordPress
function registrar_assets() {
    wp_enqueue_style('style', plugins_url('assets/css/styles.css', __FILE__), array(), '1.0' );
    wp_enqueue_script('scripts', plugins_url('assets/js/scripts.js', __FILE__), array('jquery'), '1.0', true);
}

// Agregar los estilos y scripts en el hook 'wp_enqueue_scripts'
add_action('wp_enqueue_scripts', 'registrar_assets');

function zona_horaria() {
    // Obtener la zona horaria del sitio WordPress
    $wordpressTimeZone = get_option('timezone_string');

    // Obtener solo el nombre de la ciudad
    $cityName = explode('/', $wordpressTimeZone)[1];
    echo '<p id="ciudad" style="display: none;">' . $cityName . '</p>';
}

add_action('wp_head', 'zona_horaria');

function caja() {
    echo '<div class="caja">
    <h3 id="nombre-ciudad"></h3>
    <p id="temperatura"></p>
    </div>';
}