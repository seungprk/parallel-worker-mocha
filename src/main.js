if (window.Worker) {
  var parallelize = function(threads, callback) {
    var workers = [];
    var status = [];
    var results = [];
    for (var i = 0; i < threads; i++) {
      var worker = new Worker('src/worker.js');
      workers.push(worker);
      status[i] = false;
      worker.postMessage(i);

      worker.onmessage = function(event) {
        results[event.data.i] = event.data.i;
        status[event.data.i] = true;

        console.log(event.data.msg);

        if (status.every(ele => ele)) {
          var result = results.reduce((accum, val) => accum + val);
          callback(result);
        }
      };
    }
  };
}