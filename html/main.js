// Эффект замерзшего стекла
function toggle() { // прикрепляем к h1

  // Возвращает первый элемент внутри документа (используется предупорядоченный обход
  // узлов в глубину до первого найденного узла), который совпадает с определенной группой
  // селекторов.
  var button = document.querySelector('.toggle');

  var overlay = document.querySelector('.glass');
  if (overlay.className === 'glass down') {
    overlay.className = 'glass up';
  } else {
    overlay.className = 'glass down';
  }
}

