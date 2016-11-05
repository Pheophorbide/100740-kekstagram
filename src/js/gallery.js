'use strict';

define(['./getTemplateElement'],
  function(getTemplateElement) {
    var Gallery = function(data, index) {
      this.overlay = document.querySelector('.gallery-overlay');
      this.closeButton = document.querySelector('.gallery-overlay-close');
      this.activePicture = 0;
      this.pictures = [];
      this.data = data;
      this.element = getTemplateElement(data);
      this.img = document.querySelector('.gallery-overlay-image');
      this.show(index);
    };

    Gallery.prototype.setPictures = function(array) {
      this.pictures = array;
    };
    Gallery.prototype.show = function(number) {
      var self = this;
      this.element.onclick = function(event) {
        event.preventDefault();
        self.overlay.classList.remove('invisible');
        self.setActivePicture(number);
      };
      this.img.onclick = function(event) {
        var targetSRC = event.target.src;
        var targetURI = event.target.baseURI;
        var currentSRC = targetSRC.split(targetURI);
        var picturesURL = self.pictures.map(function(item) {
          return item.url;
        });
        var currentNumber = picturesURL.indexOf(currentSRC[1]);
        var next = ++currentNumber;
        self.setActivePicture(next);
      };
      this.closeButton.onclick = function() {
        self.hide();
      };
    };
    Gallery.prototype.hide = function() {
      this.overlay.classList.add('invisible');
    };
    Gallery.prototype.setActivePicture = function(number) {
      this.activePicture = number;
      this.img.src = this.pictures[this.activePicture].url;
    };
    return Gallery;
  }
);
