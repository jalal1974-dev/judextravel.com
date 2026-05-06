<?php
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u863157364_Vxov2' );

/** Database username */
define( 'DB_USER', 'u863157364_A3Ktj' );

/** Database password */
define( 'DB_PASSWORD', 'zXzcZhKIZe' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'U2%cOb0a//v*fK3*Zl.82 `J:6J^j1w?K;:3#c()sQyk:Kb,=snL(2^.[Nn`%kqr' );
define( 'SECURE_AUTH_KEY',   'RE1VEL 81:.Ql_j4RQH2$<x~;M~z5o;=5l^D4+U`!gO<goIRN=XKuYku#eXY2lmp' );
define( 'LOGGED_IN_KEY',     '? Qxh0(ehVP=y-e21eo!AK4SXk8qM~/_<CUblL|)N?n%5A@j:iOa_XU5/`,5g}jS' );
define( 'NONCE_KEY',         'R=+aXZE5l.-ZTLpFll`MG6nsOlSqy;_{P5y}~J5CCsQBc~bs=U~j 4;br7DGs3I;' );
define( 'AUTH_SALT',         '{UA6h,&>/6tr4gg.w}ZT1TpzD4 5uFo.%c6/B`,ryiF[z>w8smVLV$QP4<0PvLN^' );
define( 'SECURE_AUTH_SALT',  '7nT8>uci:;_Pm^U`Q7Y~n_^r>u #D)C9VIyUY[h|;idey}I& IY;v4;p4Jsw;qON' );
define( 'LOGGED_IN_SALT',    '925R0wsAn2*tsT!9_<)mVL]$P)^$8HMO$ }%PLZ{}dp%  7g5[-J9>XT!l %Tk]B' );
define( 'NONCE_SALT',        '}Z9?<2|go6SA_3pouA`~-AaO1&E<=~Tn!:4eg*jW*{$M}/HB+*8|kHCbUQ)X&zk?' );
define( 'WP_CACHE_KEY_SALT', 'f%9zF*xGgBAVACCuC4EPt$(-$i)e7a#j9A977H,-.?OF$%IFGqHON;>gwE0oFfb2' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '292ac0affe9cc5634bc27f629741b0cc' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
