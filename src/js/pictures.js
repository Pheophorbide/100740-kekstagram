'use strict';

define(['./load', './getTemplateElement'], function(load, getTemplateElement) {
  var URL = 'http://localhost:1507/api/pictures';
  var filters = document.querySelector('.filters');
  var picturesContainer = document.querySelector('.pictures');
  var picturesArrey = [];

  filters.classList.add('hidden');

  var renderPictures = function(data) {
    picturesArrey = data;
    picturesArrey.forEach(function(picture) {
      picturesContainer.appendChild(getTemplateElement(picture));
    });
  };

  load(URL, renderPictures);

  filters.classList.remove('hidden');
});
