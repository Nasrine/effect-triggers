var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $dimond = $('.diamond');
var $panel = $('.panel');

$btnShowHide.on('click', function () {
  $box.addClass('js-box-show-hide');
});

$btnMove.on('click', function () {
  $diamond.addClass('js-btn-move');
});

$btnCollapseExpand.on('click', function () {
  $panel.addClass('js-btn-collapse');
});






