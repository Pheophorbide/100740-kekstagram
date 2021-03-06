'use strict';

define(
  function() {
    var IMAGE_LOAD_TIMEOUT = 10000;
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
    return function(item) {
      var templateItem = templateContainer.querySelector('.picture').cloneNode(true);
      templateItem.querySelector('.picture-comments').textContent = item.comments;
      templateItem.querySelector('.picture-likes').textContent = item.likes;
      var blockImg = new Image();
      var targetImg = templateItem.querySelector('img');
      blockImg.onload = function(event) {
        clearTimeout(blockImgTimeout);
        targetImg.src = event.target.src;
        targetImg.style.width = '182';
        targetImg.style.height = '182';
      };
      blockImg.onerror = function() {
        targetImg.classList.add('picture-load-failure');
      };
      blockImg.src = item.url;

      var blockImgTimeout = setTimeout(function() {
        targetImg.classList.add('picture-load-failure');
      }, IMAGE_LOAD_TIMEOUT);
      return templateItem;
    };
  }
);
