/**
 * Created with JetBrains WebStorm.
 * User: Aarish Khan
 * Date: 11/19/13
 * Time: 9:32 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){
     slidenum=0;
var speed=5000;

    slides=[
  Slide1,Slide2,Slide3
  // second=new Slide2,
   //third= new Slide3
   ]
resetslides=[
ResetSlide1,ResetSlide2,ResetSlide3
]
    slides[0]();

    $(".ls-nav-prev").click(


        function(e){
        e.preventDefault();
            resetslides[slidenum]();

       $(".sl-"+(slidenum+1)+"").css("display","none");

            slidenum--;
            if(slidenum===-1)
            {slidenum=2;}
       $(".sl-"+(slidenum+1)+"").css("display","block");
            slides[slidenum]();

        });

    $(".ls-nav-next").click(
        function(e){
            e.preventDefault();
            resetslides[slidenum]();

            $(".sl-"+(slidenum+1)+"").css("display","none");

        slidenum++;
        if(slidenum===3)
            {slidenum=0;}
            $(".sl-"+(slidenum+1)+"").css("display","block");
            slides[slidenum]();




        });







    $(".ls-nav-prev")
    $(".ls-nav-next")

})();



function Slide1(){
    $("#sl-1-conveyer").delay(500).animate( { left: "0px" }, 1000, 'easeInOutCubic',function(){});//left
    $("#sl-1-ls-dot-2").delay(100).animate( { top: "280px" }, 1000, 'easeInOutQuart');//top
    $("#sl-1-ls-dot-1").delay(100).animate( { left: "534px" }, 1000, 'easeInOutQuart',function(){

        $("#sl-1-ls-dot-7").delay(1000).animate( { top: "200px" }, 1000, 'easeInOutQuart' );//top

        $("#sl-1-ls-dot-5").delay(1000).animate( { top: "280px" }, 600, 'easeInOutQuart' );
        $("#sl-1-ls-dot-6").delay(1000).animate( {  top: "280px" }, 800, 'easeInOutQuart' );
        $("#sl-1-ls-dot-8").delay(1500).animate( { left: "700px" }, 1000, 'easeInOutQuart' );
        $("#sl-1-ls-dot-4").delay(1200).animate( { top: "200px" }, 2000, 'easeInOutQuart');
        $("#sl-1-ls-dot-3").delay(1200).animate( { top: "280px" }, 2000, 'easeInOutQuart' );//left


        $("#sl-1-text-header").delay(4000).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-1-text-normal").delay(5000).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-1-bg-oval").delay(2000).animate( { top: "1px"}, 5000, 'easeOutCubic');//top
        $("#sl-1-radials").delay(5000).animate( { opacity: "1" }, 2000, 'easeOutSine');
        $("#sl-1-text-front").delay(6000).animate( { opacity: "1" }, 2000, 'easeOutSine' );//opacity

        //opacity

        $("#sl-1-person-images").delay(6000).animate( { left: "800px" }, 4000, 'easeOutCubic' );//left


    } );//left
}

function Slide2(){
  //left
    $("#sl-2-ls-dot-2").delay(100).animate( { top: "280px" }, 100, 'easeInOutQuart');//top
    $("#sl-2-ls-dot-1").delay(100).animate( { left: "617px" }, 500, 'easeInOutQuart',function(){

        $("#sl-2-ls-dot-7").delay(400).animate( { top: "200px" }, 1000, 'easeInOutQuart' );//top

        $("#sl-2-ls-dot-5").delay(1000).animate( { top: "280px" }, 600, 'easeInOutQuart' );
        $("#sl-2-ls-dot-6").delay(1000).animate( {  top: "280px" }, 800, 'easeInOutQuart' );
        $("#sl-2-ls-dot-8").delay(1500).animate( { left: "700px" }, 1000, 'easeInOutQuart' );
        $("#sl-2-ls-dot-4").delay(1200).animate( { top: "200px" }, 2000, 'easeInOutQuart');
        $("#sl-2-ls-dot-3").delay(1200).animate( { top: "280px" }, 2000, 'easeInOutQuart' );//left


        $("#sl-2-text-header").delay(4000).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-2-text-normal").delay(5000).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-2-bg-oval").delay(2000).animate( { left: "-600px"}, 5000, 'easeOutCubic');//top
        $("#sl-2-radials").delay(5500).animate( { opacity: "1" }, 1000, 'easeOutSine');
        $("#sl-2-text-front").delay(6000).animate( { opacity: "1" }, 1000, 'easeOutSine' );//opacity
        $(".watering-can").delay(6500).animate( { top: "0px" }, 1000, 'easeOutSine');//opacity
        AnimateRotate(50);
        $(".watering-can-water").delay(7000).animate( { opacity: "1" }, 2000, 'easeOutSine' );//opacity

        //opacity




    } );//left
}
function Slide3(){
    //left
    $("#sl-3-ls-dot-2").delay(100).animate( { top: "280px" }, 100, 'easeInOutQuart');//top
    $("#sl-3-ls-dot-1").delay(100).animate( { left: "617px" }, 500, 'easeInOutQuart',function(){

        $("#sl-3-ls-dot-7").delay(400).animate( { top: "200px" }, 1000, 'easeInOutQuart' );//top

        $("#sl-3-ls-dot-5").delay(1000).animate( { top: "280px" }, 600, 'easeInOutQuart' );
        $("#sl-3-ls-dot-6").delay(1000).animate( {  top: "280px" }, 800, 'easeInOutQuart' );
        $("#sl-3-ls-dot-8").delay(1500).animate( { left: "700px" }, 1000, 'easeInOutQuart' );
        $("#sl-3-ls-dot-4").delay(1200).animate( { top: "200px" }, 2000, 'easeInOutQuart');
        $("#sl-3-ls-dot-3").delay(1200).animate( { top: "280px" }, 2000, 'easeInOutQuart' );//left


        $("#sl-3-text-header").delay(4000).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-3-text-normal").delay(5500).animate( { left: "40px" }, 2000, 'easeOutBack');//left
        $("#sl-3-bg-oval").delay(2000).animate( { left: "400px"}, 5000, 'easeOutCubic');//top
        $("#sl-3-radials").delay(6500).animate( { opacity: "1" }, 1000, 'easeOutSine');
        $("#sl-3-text-front").delay(5500).animate( { opacity: "1" }, 1000, 'easeOutSine' );//opacity


        //opacity




    } );//left
}


function AnimateRotate(d){
    var elem = $(".watering-can");

    $({deg: 0}).delay(7000).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
}


function ResetSlide1( ){


    $("#sl-1-conveyer").css(  'left', "" );//left
    $("#sl-1-ls-dot-2").css(  'top', "" );//top
    $("#sl-1-ls-dot-1").css(  'left', "" );

    $("#sl-1-ls-dot-7").css( 'top', "" );//top

    $("#sl-1-ls-dot-5").css(  'top', ""  );
    $("#sl-1-ls-dot-6").css(  'top', ""  );
    $("#sl-1-ls-dot-8").css(  'left', "" );
    $("#sl-1-ls-dot-4").css(  'top', "");
    $("#sl-1-ls-dot-3").css(  'top', "" );//left


    $("#sl-1-text-header").css(  'left', "" );//left
    $("#sl-1-text-normal").css(  'left', "" );//left
        $("#sl-1-bg-oval").css(  'top', "");//top
    $("#sl-1-radials").css( 'opacity', "" );
    $("#sl-1-text-front").css(  'opacity', "" );//opacity

        //opacity

        $("#sl-1-person-images").css(  'left', ""  );//left






}
function ResetSlide2(){
    $("#sl-2-ls-dot-2").css(  'top', "" );//top
    $("#sl-2-ls-dot-1").css(  'left', "" );

        $("#sl-2-ls-dot-7").css( 'top', "" );//top

        $("#sl-2-ls-dot-5").css(  'top', ""  );
        $("#sl-2-ls-dot-6").css(  'top', ""  );
        $("#sl-2-ls-dot-8").css(  'left', "" );
        $("#sl-2-ls-dot-4").css(  'top', "");
        $("#sl-2-ls-dot-3").css(  'top', "" );//left


        $("#sl-2-text-header").css(  'left', "" );//left
        $("#sl-2-text-normal").css(  'left', "" );//left
        $("#sl-2-bg-oval").css(  'left' , "");//top
        $("#sl-2-radials").css( 'opacity', "" );
        $("#sl-2-text-front").css(  'opacity', "" );//opacity
        $(".watering-can").css(  'top', "");//opacity
        AnimateRotate(0);
        $(".watering-can-water").css(  'opacity', "" );//opacity
    };
function ResetSlide3(){
    $("#sl-3-ls-dot-2").css(  'top', "" );//top
    $("#sl-3-ls-dot-1").css(  'left', "" );

    $("#sl-3-ls-dot-7").css( 'top', "" );//top

    $("#sl-3-ls-dot-5").css(  'top', ""  );
    $("#sl-3-ls-dot-6").css(  'top', ""  );
    $("#sl-3-ls-dot-8").css(  'left', "" );
    $("#sl-3-ls-dot-4").css(  'top', "");
    $("#sl-3-ls-dot-3").css(  'top', "" );//left


    $("#sl-3-text-header").css(  'left', "" );//left
    $("#sl-3-text-normal").css(  'left', "" );//left
    $("#sl-3-bg-oval").css(  'left' , "");//top
    $("#sl-3-radials").css( 'opacity', "" );
    $("#sl-3-text-front").css(  'opacity', "" );//opacity



};