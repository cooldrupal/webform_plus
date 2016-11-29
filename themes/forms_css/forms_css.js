(function ($) { //  test

  Drupal.behaviors.select = {
    attach : function(с, settings) {

      $('select', context).forms();

      var selectTI = 0;
      $('.select', context).each(function(){

        $(this).css('z-index', 999-selectTI);
        selectTI ++;
        elementSelect = $(this);
        

        $(this).find('.items_inner').each(function(){

          if(!$(this).hasClass('items_padding')){
            var hidden = $(this).closest('[style=display: none;]');
            hidden.show();
            $(this).parent().show();
            $(this).jScrollPane({scrollbarWidth:4, showArrows:false, contentWidth: '0px', mouseWheelSpeed: 30});
            $(this).addClass('items_padding');
            $(this).parent().hide();
            hidden.hide();
          }
                
        });
      });

      $('.form-radios .multichoice_row', context).click(function(){

        $(this).find('[type="radio"]:checked').trigger('change');
      });

    }
  };
})(jQuery);
