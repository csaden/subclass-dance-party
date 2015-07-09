describe("thrillerDancer", function() {

  var thrillerDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    thrillerDancer = makeThrillerDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(thrillerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(thrillerDancer.$node, 'toggle');
    thrillerDancer.step();
    expect(thrillerDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(thrillerDancer, "step");
      expect(thrillerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(thrillerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(thrillerDancer.step.callCount).to.be.equal(2);
    });
  });
});
