var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = 2000;
  this.$node.removeClass('dancer');
  this.$node.addClass('popDancer moonWalk');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

PopDancer.prototype.setPosition = function() {
  Dancer.prototype.setPosition.call(this);
};