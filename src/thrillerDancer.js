var ThrillerDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('thrillerDancer');
};

ThrillerDancer.prototype = Object.create(Dancer.prototype);
ThrillerDancer.prototype.constructor = ThrillerDancer;

ThrillerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

ThrillerDancer.prototype.setPosition = function() {
  Dancer.prototype.setPosition.call(this);
};