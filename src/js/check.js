var getMessage = function (a, b) {

  if (typeof a === 'boolean') {
    return a ? 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров' : 'Переданное GIF-изображение не анимировано';
  } else if (typeof a === 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
  } else if (typeof b === 'object' && typeof a === 'object') {
    var artifactsSquare = 0;
    for (var i = 0; i < a.length && i < b.length; i++) {
      artifactsSquare += a[i] * b[i];
    }
    return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
  } else if (typeof a === 'object') {
    var amountOfRedPoints = a.reduce(function (sum, current) {
      return sum + current;
    });
    return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
  } else {
    return 'Переданы некорректные данные';
  }
};
