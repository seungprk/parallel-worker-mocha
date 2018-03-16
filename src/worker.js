onmessage = function(e) {
  for (var i = 0; i < 100000000; i++) {}
  postMessage({
    msg: "Thread " + e.data + " finished",
    i: e.data
  });
};