// sly 터치슬라이드 메뉴
let menu_start = "0";
$('#mobile_nav').sly({
  horizontal: 1,
  itemNav: 'centered',
  smart: 1,
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: menu_start,
  speed: 300,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1
  });
$(window).resize(function(e) {
  $('#mobile_nav').sly('reload');
});
