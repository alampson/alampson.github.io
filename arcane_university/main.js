var 
  container_div = $("body"),
  index = 0,
  method = {},
  $overlay,
  $modal,
  $content,
  $close,
  dummy,
  rand,
  rwid,
  rhei,
  popd,
  port,
  last,
  dom_stuff = {};

$(document).ready(function(){

  $modal = document.getElementById("#modal");
  $overlay = document.getElementById("#overlay");
  $content = document.getElementById("#content");
  $close = document.getElementById("#close");

  $("body").css({
    "margin":'0px',
    "padding":'0px'
  }).append( "<div id='test-container' style='background-color: rgb(255,255,255)'></div>", "<div id='overlay'></div>", "<div id='modal'></div>");

  $("#test-container").css({
    "width":'100%',
    "height":'100vh',
    "overflow-y":'hidden',
    "background-color":'black',
  }).append( "<button id='clicker'>click me</button>");

/*
  $("#modal").css({
    "position":'absolute',
    "background":'url(tint20.png) 0 0 repeat',
    "background":'rgba(0,0,0,0.2)',
    "border-radius":'14px',
    "padding":'8px',
  }).append("<div id='content'></div>", "<a href='#' id='close'>close</a>");

  $("#overlay").css({
    "position":'fixed',
    "top":'0',
    "left":'0',
    "width":'100%',
    "height":'100%',
    "background":'#000',
    "opacity":'0.5',
    "filter":'alpha(opacity=50)',
  });

  $("#content").css({
    "border-radius":'8px',
    "background":'#fff',
    "padding":'20px',
  });

  $("#close").css({
    "position":'absolute',
    "background":'url(close.png) 0 0 no-repeat',
    "width":'24px',
    "height":'27px',
    "display":'block',
    "text-indent":'-9999px',
    "top":'-7px',
    "right":'-7px',
  });


  $modal.hide();
  $overlay.hide();
*/

  $("#clicker").click( function(){

    $("#clicker").html("click the boxes!");
    //document.getElementById("test-container").innerHTML = "click the boxes!";

    for(var i = 0; i < 465; i++){
    rand = Math.floor((Math.random() * 10) + 1);
      if(rand == 10 || rand == 8){
        $("#test-container").append( "<p class='inner-text' onclick='popup(event)' style='width:40px;height:40px;margin:2px;float:left;background-color:skyblue;cursor:pointer;'></p>" );
      }else if(rand == 9 || rand == 7 || rand == 5){
        $("#test-container").append( "<p class='inner-text' onclick='portfolio(event)' style='width:40px;height:40px;margin:2px;float:left;background-color:white;cursor:pointer;'></p>" );
      }else if(rand == 1){
        $("#test-container").append( "<p class='inner-text' onclick='nat1(event)' style='width:40px;height:40px;margin:2px;float:left;background-color:plum;cursor:pointer;'></p>" );
      }else{
        $("#test-container").append( 
          //:This is easier to read.
          //:--------------------------------------------://
          (dom_stuff.$whatever_01 = $("<p>")).addClass(
            "inner-text"
          ).css({
            'width':"40px",
            'height':"40px",
            'margin':"2px",
            'float':"left",
            'background-color':"pink",
            'cursor':"pointer",
          }).on("click",disappear) //<--probably correct way to setup listener, maybe not. Have to see.
          //:--------------------------------------------://
          //:This is hard to read, flows off screen even on horizontal monitor.
          //"<p class='inner-text' onclick='disappear(event)'style='width:40px;height:40px;margin:2px;float:left;background-color:pink;cursor:pointer;'></p>" 
        );
      }


      $(".inner-text").each( function(){
        $(this).attr("id","item-"+index++);

      });

    };



    }).css({
      "background-color":'rgba(255,255,255)',
      "border":'2px solid black',
      "outline":'none',
      "position":'absolute',
      "top":'45%',
      "padding":'20px 20px',
      "width":'200px',
      "left":'41%',
      "cursor":'pointer',
      "font-size":'20px'
    });


});



//: var disappear = function(event){
function disappear( event ){
  dummy = event.target.id;

  alert("you chose " + dummy + "! thank you!!");
  //modal.open({content: $("<p>Thank you!</p>"), width: "500px", height: "200px"});
  document.getElementById(dummy).style.visibility = "hidden";
  //$("event.target.id").remove();
}

var popup = function(event){
  popd = event.target.id;
  alert("you chose " + popd + "! thank you!!");
  document.getElementById(popd).style.visibility = "hidden";
}

var portfolio = function(event){
  port = event.target.id;
  alert("you found a link to my portfolio through " + port + "!");
  document.getElementById(port).style.visibility = "hidden";
}

var nat1 = function(event){
  last = event.target.id;
  alert("you found a link to my portfolio through " + last + "!");
  document.getElementById(last).style.visibility = "hidden";
}

var modal = (function(){
  // Center the modal in the viewport
  method.center = function () {};
  // Open the modal
  method.open = function (settings) {};
  // Close the modal
  method.close = function () {};
  return method;
}());

method.center = function () {
  var top, left;

  top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
  left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

  $modal.css({
    top:top + $(window).scrollTop(), 
    left:left + $(window).scrollLeft()
  });
};

method.open = function (settings) {
  $content.empty().append(settings.content);

  $modal.css({
    width: settings.width || 'auto', 
    height: settings.height || 'auto'
  })

  method.center();

  $(window).bind('resize.modal', method.center);

  $modal.show();
  $overlay.show();
};

/*
method.close = function () {
  $modal.hide();
  $overlay.hide();
  $content.empty();
  $(window).unbind('resize.modal');
};

$close.click(function(e){
  e.preventDefault();
  method.close();
});
*/




/*
//THIS IS JM'S CODE, USE LATER

makeUI( container_div );

function makeUI( container_div ){
   var stuff = {};
   $parent = $(container_div);


   $parent.append(
       (stuff.$div = $("<div>")).css({
           'background-color':"red"
       }).text(
        insert text here
       )
	   ,
       (stuff.$another_div = $("<div>")).css({
           'background-color':"green"
       }).text(
        insert text here
       ) 
   )

}
*/