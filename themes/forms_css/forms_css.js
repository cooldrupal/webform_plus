jQuery(function($){
	
	$('.forms_css select').forms();
	$('.forms_css .select .items_inner').each(function () {
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
    })

});
