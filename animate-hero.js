(function($) {


    /*****************************
     * Cursor logic
     *****************************/

    function Cursor($cursorElement) {
        this.isBlinking = true; 
        this.$cursorElement = $cursorElement; 

        this.blinkingInterval = setInterval(this.animateBlinking.bind(this), 500); 
    }

    Cursor.prototype.animateBlinking = function() {
        console.log("In animateBlinking"); 

        if (!this.isBlinking) return; 


        this.$cursorElement.toggle(); 
    }

    Cursor.prototype.setIsBlinking = function(value) {
        this.isBlinking = value; 
        this.$cursorElement.show(); 
    }



     /*****************************
     * End Cursor logic 
     *****************************/


    var myCursor = new Cursor($(".cursor")); 

    var descriptions = [
        "A social enterprise", 
        "Lorem ipsum dolor sit amet", 
        "consectetur adipiscing elit", 
        "Aliquam quis purus in justo"
    ]; 

    $textDisplay = $('#what-is-apprenta'); 
    
    var wordIndex = 0; 
    var letterIndex = 0; 
    var showWordsInterval; 
    var hideWordsInterval; 

    $textDisplay.on("showWord", function(e) {
        console.log("In showWord"); 

        letterIndex = 0; 

        myCursor.setIsBlinking(true); // Brief moment of rest.  Cursor blinks when we're not typing anything

        setTimeout(function() {
            myCursor.setIsBlinking(false); // don't let cursor blink when we're typing letters on screen.  
            showWordsInterval = setInterval(showNextLetter, 66);
        }, 1000)
    }); 

    $textDisplay.on("hideWord", function(e) {
        console.log("In hideWord"); 

        myCursor.setIsBlinking(true); // Brief moment of rest.  Cursor blinks when we're not typing anything

        setTimeout(function() {
            myCursor.setIsBlinking(false); // don't let cursor blink when we're deleting letters from screen.  
            hideWordsInterval = setInterval(hideLastLetter, 20); 
        }, 1500)
    }); 


    
    function showNextLetter() {
        $("<span class='single-letter'>" + descriptions[wordIndex][letterIndex] + "</span>").insertBefore($(".cursor"));
        letterIndex++; 

        if (letterIndex >= descriptions[wordIndex].length) {
            wordIndex = wordIndex % descriptions.length; //loop back to the beginning if we reach the end of the description list. 
            clearInterval(showWordsInterval); 
            $textDisplay.trigger("hideWord"); 
        }
    }

    function hideLastLetter() {
        var $lettersToRemove  = $textDisplay.find(".single-letter");

        if ($lettersToRemove.length == 0) {
            wordIndex++; 
            wordIndex = wordIndex % descriptions.length; //loop back to the beginning if we reach the end of the description list. 
            clearInterval(hideWordsInterval); 
            $textDisplay.trigger("showWord"); 
            return; 
        }

        

        $lettersToRemove[$lettersToRemove.length-1].remove();  

    }



     $textDisplay.trigger("showWord");

   

})(jQuery);