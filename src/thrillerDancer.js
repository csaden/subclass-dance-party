var thrillerDancer = function (top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
   this.$node.removeClass('dancer');
  this.$node.addClass('thrillerDancer');
};
thrillerDancer.prototype = Object.create(Dancer.prototype);
thrillerDancer.prototype.constructor = popDancer;

thrillerDancer.prototype.step = function (){
  Dancer.prototype.step.bind(this)();
  //change toggle
  // this.$node.toggle();
}

thrillerDancer.prototype.setPosition = function(top, left) {
  Dancer.prototype.setPosition.apply(this,[this.top, this.left]);  
};

var makeThrillerDancer = function (top, left, timeBetweenSteps) {
  return new thrillerDancer(top, left, timeBetweenSteps);
}