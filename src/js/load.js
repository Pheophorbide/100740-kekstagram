'use strict';

define(function() {
  return function(url, callback) {
    var callbackName = 'JSONPRequest';

    window[callbackName] = function(date) {
      callback(date);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };
}
);
