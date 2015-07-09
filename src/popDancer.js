var popDancer = function (top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('popDancer moonWalk');
};

popDancer.prototype = Object.create(Dancer.prototype);
popDancer.prototype.constructor = popDancer;

popDancer.prototype.step = function () {
  Dancer.prototype.step.bind(this)();
};

popDancer.prototype.setPosition = function(top, left) {
  Dancer.prototype.setPosition.apply(this,[this.top, this.left]);  
  
};

var makePopDancer = function (top, left, timeBetweenSteps) {
  return new popDancer(top, left, 2000);
};