var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $dimond = $('.diamond');
var $panel = $('.panel');

$btnShowHide.on('click', function () {
  $box.toggleClass('js-box-show-hide');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('js-btn-move');
});

$btnCollapseExpand.on('click', function () {
  $panel.toggleClass('js-btn-collapse');
});
