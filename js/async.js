(function ($) {
  $.asyncFun = function (it, data, cb) {
    if (it.length < 1) cb(data);else {
      var t = it.shift();
      t(data, function (data2) {
        asyncFun(it, data2, cb);
      });
    }
  };
  $.Array.prototype.async = function (cb,data=[]){
    asyncFun(this,data, function (data2) {
      cb(data2);
    });
  };
})(window);
