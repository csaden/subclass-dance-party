$(document).ready(function(){
  window.dancers = [];
  window.popDancers = [];
  window.thrillerDancers = [];

  $("#lineDancerButton").on("click",function(event){
    var left = $("body").width() * 0.75;
    var top = 50;

    for( var i = 0 ; i < popDancers.length ; i++){
      popDancers[i].$node[0].style.top = top +'px';
      popDancers[i].$node[0].style.left = left + 'px';
      top += 125;
    }

    top = 50;
    left = $("body").width() * 0.2;

    for( i = 0 ; i < thrillerDancers.length ; i++){
      thrillerDancers[i].$node[0].style.top = top +'px';
      thrillerDancers[i].$node[0].style.left = left + 'px';
      top += 150;
    }

  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // var dancer = dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    // $('body').append(dancer.$node);

    var getX = function(translateX){
      return Math.random() * ($("body").width() - translateX - 200) + translateX;
    };

    var getY = function(){
      return Math.random() * ($("body").height() - 300) + 50;
    };

    var x = getX(350);
    var y = getY();
    var timeBetweenSteps = Math.random() * 1000;

    var dancer = new dancerMakerFunction(y, x, timeBetweenSteps);

    $('body').append(dancer.$node);

    if (dancer instanceof PopDancer) {
      popDancers.push(dancer);
    }

    if (dancer instanceof ThrillerDancer) {
      thrillerDancers.push(dancer);
    }

  });
});

