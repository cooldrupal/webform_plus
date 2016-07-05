(function($) {
    Drupal.behaviors.form_placeholder_touch = {
   	attach: function(context, settings) {
         if ($.type(settings.form_placeholder) !== 'undefined' && $.type(settings.form_placeholder.include) !== 'undefined' ) {
             $(settings.form_placeholder.include).each( function() {
                 if ( $(this).attr('placeholder') ) {
                   
                   //save placeholder value to rel attribute
                   $(this).attr('rel', $(this).attr('placeholder'));

                   $(this).focus( function(){
			 if ( $(this).attr('placeholder') == $(this).attr('rel') ){
				$(this).attr('placeholder', ''); //clear placeholder
			 }
		     });

                   $(this).blur( function(){
			 if ( $(this).val() == '' ){
				$(this).attr('placeholder', $(this).attr('rel')); //restore placeholder
			 }
		     });

                 }
             });
         }

       }
     }
})(jQuery); 
