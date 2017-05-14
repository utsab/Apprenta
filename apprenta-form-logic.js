(function($) {
   $webDesignBtn = $('#web-design-work-option'); 
   $webDesignCheckBox = $('#input_4_0'); 


   // We hide all of jotform's default checkboxes because they are ugly. 
   // We instatiate our own custom buttons which the user can click on.  Whenever
   // the user clicks on our custom button, we map this to the corresponding jotform 
   // html element. We will programmitally check or uncheck the corresponding jotform 
   // element. 

   var jotFormMappings = {
      "web-design": "#input_4_0", 
      "ux-ui": "#input_4_1", 
      "mobile-app-dev": "#input_4_2", 
      "web-dev": "#input_4_3", 
      "business-strategy": "#input_4_4", 
      "design-sprint": "#input_4_5", 
      "art-direction": "#input_4_6", 
      "product-design": "#input_4_7", 
      "prototype-mvp": "#input_4_8", 
      "apprenticeship": "#input_4_9" 

   }; 



   $(".work-option").click(function(e) {

      var workOptionID = e.target.id; 
      var jotFormCheckboxID = jotFormMappings[workOptionID]; 
      var $jotFormCheckboxElement = $(jotFormCheckboxID); 

      if ($jotFormCheckboxElement.is(":checked")) { 
           $jotFormCheckboxElement.prop('checked', false);   // uncheck the jotform element
           $(this).removeClass('selected');  // change state of our UI to show that the button is not selected
      } else {
           $jotFormCheckboxElement.prop('checked', true);  // check the jotform element
           $(this).addClass('selected'); // change state of our UI to show that the button is selected
      }

   }); 


})(jQuery);
