(function($) {
    var wh = window.innerHeight,
        $sectionZero = $('#zero'),
        $sectionOne = $('#one'),
        $sectionTwo = $('#two'),
        $sectionThree = $('#three'),
        $whoWeAreTextContainer = $('#one .content-container'), 
        $largeBackground = $('#large-background'),
        $wordOne = $('#word-1'),
        $wordTwo = $('#word-2'),
        $wordThree = $('#word-3'),
        $letter1 = $('#letter1'),
        $letter2 = $('#letter2'),
        $letter3 = $('#letter3'), 
        $letter4 = $('#letter4'),
        $letter5 = $('#letter5'),
        $letter10 = $('#letter10'),
        $letter11 = $('#letter11'),
        $letter12 = $('#letter12'); 
        $pageIndicator = $('#page-indicator'); 
 

    var isMobile = /Mobi/.test(navigator.userAgent); 

    $largeBackground.height(wh*6.1); 

    // init
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
     

    var transition0 = new TimelineMax();
    transition0
        .to($sectionZero, 1, {opacity: 0}, '0')
        // .to($pageIndicator, 4, {opacity: '1', bottom: '-8%'}, '2')
        // .to($sectionOne, 3, {opacity: '1'}, '3'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: isMobile ? "20%" : "40%",
        offset: 0
    })
    .setTween(transition0)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:name
    //     });


    var pageIndicatorAnimation = new TimelineMax();
    pageIndicatorAnimation
        .to($pageIndicator, 10, {top:'-50%'}, '0');
        // .to($pageIndicator, 4, {opacity: '1', bottom: '-8%'}, '2')
        // .to($sectionOne, 3, {opacity: '1'}, '3'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "520%",
        offset: 0
    })
    .setTween(pageIndicatorAnimation)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"pageIndicatorAnimation"
    //     });



    var enterBigLetterScreen1 = new TimelineMax();
    enterBigLetterScreen1
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionOne, 3, {opacity: '1'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: isMobile ? "20%" : "50%",
        offset: isMobile ? wh * .4 :  wh * 1.0
    })
    .setTween(enterBigLetterScreen1)
    .addTo(ctrl);





    /* First screen with letters moving and fading */

    var bigLettersMove = new TimelineMax();

    if (isMobile) {
        bigLettersMove
            .to($letter1, 4, {top:'0%', left:'-25%', ease: Power2.easeIn})
            .to($letter2, 4, {left:'140%', top:'-27%', ease: Power2.easeIn}, '0')
            .to($letter3, 4, {bottom:'-10%', left:'-30%', ease: Power2.easeIn}, '0')
            .to($letter4, 4, {bottom:'-20%', ease: Power2.easeIn}, '0')
            .to($letter5, 4, {bottom:'4%', right:'-25%', ease: Power2.easeIn}, '0');
            // .to($sectionOne, 4, {opacity: 0}, '1');
    } else {
        bigLettersMove
            .to($letter1, 4, {top:'-40%', left:'-30%', ease: Power2.easeIn})
            .to($letter2, 4, {left:'100%', top:'-140%', ease: Power2.easeIn}, '0')
            .to($letter3, 4, {bottom:'-75%', left:'30%', ease: Power2.easeIn}, '0')
            .to($letter4, 4, {bottom:'-45%', ease: Power2.easeIn}, '0')
            .to($letter5, 4, {bottom:'-40%', right:'-26%', ease: Power2.easeIn}, '0');
    }
    
    new ScrollMagic.Scene( {
         offset: isMobile ? wh * .5 : wh*1.2,
        // triggerElement: $('#one-bg')[0], 
        duration: isMobile ? '30%' : '170%'
    })
    .setTween(bigLettersMove)
    .addTo(ctrl);



    var enterWhoWeAreText = new TimelineMax();
    enterWhoWeAreText
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($whoWeAreTextContainer, 1, {opacity: '1'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: isMobile ? "20%": "40%",
        offset: isMobile ? wh * .8 : wh * 2.6
    })
    .setTween(enterWhoWeAreText)
    .addTo(ctrl);


    var leaveBigLetterScreen1 = new TimelineMax();
    leaveBigLetterScreen1
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionOne, 3, {opacity: '0'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "40%",
        offset: wh * 4.1
    })
    .setTween(leaveBigLetterScreen1)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Big letters screen 1 leaves"
    //     });




    // // // /* Line moving up screen fades to white */

    var enterBigLetters2 = new TimelineMax();
    enterBigLetters2
        .to($sectionTwo, 2, {opacity: '1'}, '0');

    
    new ScrollMagic.Scene( {
         duration: '30%', 
         offset: wh * 4.6
    })
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Enter big letters 2"
    //     })
    .setTween(enterBigLetters2)
    .addTo(ctrl);



    // // // /* 2nd screen with big moving letters fades to white */

    var bigLettersMoveOnHowItWorksSection = new TimelineMax();

    if (isMobile) {
        bigLettersMoveOnHowItWorksSection
            .to($letter10, 1, {top:'15%', left:'-12%'}, '0')
            .to($letter12, 1, {bottom:'0%', right:'30%'}, '0') 
            .to($letter11, 1, {right:'15%', top:'0%'}, '0');
    } else {
        bigLettersMoveOnHowItWorksSection
            .to($letter10, 1, {top:'-20%', left:'-8%', ease: Power2.easeIn}, '0')
            .to($letter12, 1, {bottom:'-35%', right:'30%', ease: Power2.easeIn}, '0') 
            .to($letter11, 1, {right:'22%', top:'-15%', ease: Power2.easeIn}, '0');
    }

    
    new ScrollMagic.Scene( {
          duration: '80%', 
         offset: wh*4.9
    })
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Big letters move on How-it-works"
    //     })
    .setTween(bigLettersMoveOnHowItWorksSection)
    .addTo(ctrl);




    var leaveHowItWorksSection = new TimelineMax();
    leaveHowItWorksSection
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionTwo, 1, {opacity: '0'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "30%",
        offset: wh * 5.7
    })
    .setTween(leaveHowItWorksSection)
    .addTo(ctrl); 
    
    /* 3rd screen (form) fades in */

    var enterForm = new TimelineMax();
    enterForm
        .to($sectionThree, 1, {opacity: 1}, '0');

    
 

       
        new ScrollMagic.Scene({
            triggerElement: $sectionThree[0],
            duration: '50%'
        })
        .setPin($sectionThree[0])
         .setTween(enterForm)
        .addTo(ctrl);









})(jQuery);
