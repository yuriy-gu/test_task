// <div>
// <h1> some text </h1>
// <ul>
//   <li>
//   <li>
//     <ul>
//       <li>
//       <li id="var2>
//       <li>
//     </ul>
//   </li>
// </ul>
// </div>

// var2.prev()-предыдущие элементы
// var2.next() - следующие эл-ты
// var2.prevAll() - все предыдущие (перед var2)
// var2.prevUntil("#var2") до var2
// var2.sibling() - все соседи(окружающие его эл-ты)

// $('div').children() - покажет h1 и ul
// $('div').contents() - покажет все (#text, h1, #text, ul, #text) - #text это пробелы
// $('div').find('ul') - выдаст все эл-ты ul
// $('li').first() - первый элменет в списке
// $('li').last() - последний элемент в списке
// $('li').eq(0) - элемент под индексом 0
// $('li').eq(1) - элемент под индексом 1 и т.д.
// $('li').eq($('li').lenght - 1) последний элемент в списке

// $('#var').closest('ul') покажет ближайший ul searching from top
// $('#var').closest('div') покажет ближайший div searching from top
// $('#var').offsetParent() покажет ближайший позиционированный родитель (у которого position: releative, fixe, absolute)

// $('div') - все элементы div на странице
// $('*') - все теги в нашем документе

// $('div.container') - обратились к диву с классом контайнер
// $('div span') - обратились ко всем спанам в диве
// $('div > p') - непосредственный элемент р в диве (если он будет куда-то вложен то нам его не покажет)
// $('h2 + p') покажет(обратились к эелементу) нам 1й элемент p в h2
// $('p[align="left"]')- обратились к р с атрибутом align
$(document).ready(function() {
  $(function(){
    var p = $( "p:first" );
    $( "p:last" ).text( "Width:" + window.innerWidth + ", Height:" + window.innerHeight);
    // при изменении размеров окна мы увидим width: ...(будет ширина) height: ...(высота)
    });
  });
