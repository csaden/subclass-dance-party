var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

BlinkyDancer.prototype.setPosition = function() {
  Dancer.prototype.setPosition.call(this);
};