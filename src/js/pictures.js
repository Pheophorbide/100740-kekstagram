'use strict';
var URL = 'api/pictures';
var filters = document.querySelector('.filters');
var picturesContainer = document.querySelector('.pictures');
var picturesArray = [];

define(['./load', './gallery'], function(load, Gallery) {
  filters.classList.add('hidden');

  var renderPictures = function(data) {
    picturesArray = data;
    picturesArray.forEach(function(picture, index, array) {
      var pictureElement = new Gallery(picture, index);
      picturesContainer.appendChild(pictureElement.element);
      pictureElement.setPictures(array);
    });
  };

  load(URL, renderPictures);

  filters.classList.remove('hidden');
});
