(function($) {
   $webDesignBtn = $('#web-design-work-option'); 
   $webDesignCheckBox = $('#input_4_0'); 

   ($webDesignBtn).click(function() {
        if ($webDesignCheckBox.is(":checked")) {
            $webDesignCheckBox.prop('checked', false);
            $(this).removeClass('selected');
        } else {
            $webDesignCheckBox.prop('checked', true);
            $(this).addClass('selected');
        }
   }); 

})(jQuery);
