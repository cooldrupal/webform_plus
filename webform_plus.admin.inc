 <?php

/**
 * @file
 * Administrative functionality for Webform_plus.
 */

/**
 * Form constructor for themes.
 */
function webform_plus_admin_settings_form($form, &$form_state) {
  $options = _webform_plus_get_themes_list();

  $form['webform_plus_themes'] = array(
    '#type' => 'radios',
    '#title' => t('Webform plus themes'),
    '#options' => $options,
    '#default_value' => variable_get('webform_plus_themes','default')
  );

  $form['webform_plus_form_placeholder_touch'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Form placeholder touch script'),
    '#default_value' => variable_get('webform_plus_form_placeholder_touch',FALSE),
    '#disabled' => !module_exists('form_placeholder'),
    '#description' => t('Need Form placeholder module') 
  );

  $form['webform_plus_form_library'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Form library'),
    '#default_value' => variable_get('webform_plus_form_library',FALSE)
  );


  $form['#submit'][] = 'webform_plus_admin_settings_form_submit';

  return system_settings_form($form);
}

/**
 * Form constructor for themes submit.
 */
function webform_plus_admin_settings_form_submit($form, &$form_state) {
  cache_clear_all();
  drupal_set_message(t('Cache cleared'));
}

/**
 * List of themes
 */
function _webform_plus_get_themes_list() {
   $options = array();

   $module_path = drupal_get_path('module', 'webform_plus');
   $list = drupal_system_listing( "/\.info$/", $module_path . '/themes' );
   if ( count($list) ) {
      foreach ($list as $theme => $path) {
         $info = drupal_parse_info_file($path->uri);
         $options[$theme] = $info['name'] . " (" . $info['description'] . ")";
      }
   }

   return $options;
}

