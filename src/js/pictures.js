'use strict';

(function() {
  var URL = 'http://localhost:1507/api/pictures';
  var filters = document.querySelector('.filters');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var picturesContainer = document.querySelector('.pictures');
  var pictures = [];

  var load = function(url, callback) {
    var callbackName = 'JSONPRequest';

    window[callbackName] = function(date) {
      callback(date);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };

  filters.classList.add('hidden');

  var getTemplateItem = function(item) {
    var templateItem = templateContainer.querySelector('.picture').cloneNode(true);
    templateItem.querySelector('.picture-comments').textContent = item.comments;
    templateItem.querySelector('.picture-likes').textContent = item.likes;
    var blockImg = new Image();
    var targetImg = templateItem.querySelector('img');
    blockImg.onload = function(event) {
      targetImg.src = event.target.src;
      targetImg.style.width = '182';
      targetImg.style.height = '182';
    };
    blockImg.onerror = function() {
      targetImg.classList.add('picture-load-failure');
    };
    blockImg.src = item.url;
    return templateItem;
  };

  var renderPictures = function(data) {
    pictures = data;
    pictures.forEach(function(picture) {
      picturesContainer.appendChild(getTemplateItem(picture));
    });
  };

  load(URL, renderPictures);

  filters.classList.remove('hidden');

})();
