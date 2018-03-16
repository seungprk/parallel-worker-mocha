describe('Async', function() {

  it('it will test asynchronous function with Mocha/Chai', function(done){
    var testVal;
    this.timeout(10000);
    parallelize(6, result => { 
      testVal = result;
      expect(testVal).equals(15);
      done(); 
    });
  });

});