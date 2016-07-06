(function ($) { //  test

  Drupal.behaviors.select = {
    attach : function(context, settings) {

      $('select', context).forms();

      var selectTI = 0;
      $('.select', context).each(function(){

        $(this).css('z-index', 999-selectTI);
        selectTI ++;
        elementSelect = $(this);
        

        $(this).find('.items_inner').each(function(){

          if(!$(this).hasClass('items_padding')){
            var hidden = $(this).closest('[style=display: none;]');
            console.log(hidden);
            hidden.show();
            $(this).parent().show();
            $(this).jScrollPane({scrollbarWidth:4, showArrows:false, contentWidth: '0px'});
            $(this).addClass('items_padding');
            $(this).parent().hide();
            hidden.hide();
          }
                
        });
      });
    }
  };
})(jQuery);
