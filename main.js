if (window.Worker) {
  var myWorker = new Worker('worker.js');
  var div = document.querySelector('.result');

  myWorker.postMessage('hello!');

  myWorker.onmessage = function(e) {
    console.log('hello!');
    div.textContent = e.data;
  };
}