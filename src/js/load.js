'use strict';

define(function() {
  return function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(event) {
      var date = JSON.parse(event.target.response);
      callback(date);
    });
    xhr.send();
  };
}
);
