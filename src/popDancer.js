var popDancer = function (top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
   this.$node.removeClass('dancer');
  this.$node.addClass('popDancer');
};
popDancer.prototype = Object.create(Dancer.prototype);
popDancer.prototype.constructor = popDancer;

popDancer.prototype.step = function (){
  Dancer.prototype.step.bind(this)();
  //change toggle
  this.$node.toggle();
}

popDancer.prototype.setPosition = function(top, left) {
  Dancer.prototype.setPosition.apply(this,[this.top, this.left]);  
};

var makePopDancer = function (top, left, timeBetweenSteps) {
  return new popDancer(top, left, timeBetweenSteps);
}
