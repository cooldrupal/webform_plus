<?php

function foo() {
  drupal_set_message("foo");
}
  
/**
 * Implements hook_block_info().
 * Информация о блоке и дефолтные настройки.
 */
function webform_plus_block_info() {
  $blocks['hello-message'] = array(
    'info' => t('Test block'),
  );
  return $blocks;
}
 
/**
 * Implements hook_block_view().
 * Генерация заголовка блока и его контента.
 */
function webform_plus_view($delta = '') {
  $block = array();
 
  if ($delta == 'hello-message') {
    $block['subject'] = t('Message');
    $block['content'] = t('Hello World!');
  }
 
  return $block;
}

