$( () => {

  // Resizeイベント
  $(window).resize(function() {
    controlCardDummy();
  });

  // ハンバーガー
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('hamburger-menu-active');
    $('.nav-mobile').toggleClass('active');
  });

  // 最後に実行
  controlCardDummy();
});

// ダミー .card を作成
function controlCardDummy() {
  const length = $('.card').length;
  const count = length % 5;
  const add = Math.abs(5 - count);

  if (add !== 0) {
    if ($('.card.hide').length < add) {
      for (let i = 0; i < add; i++) {
        $('.container__wrap').append(`<div class="card hide"></div>`);
      }
    }
  } else {
    $('.card.hide').remove();
  }

}