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

// Terminal command to open instance of chrome that allows local web workers:
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files