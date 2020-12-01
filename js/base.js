$( () => {

  // Scrollイベント
  $(window).on('load scroll', function() {
    if ( $(this).scrollTop() > $('header').height() ) {
      $('header').clone().addClass('clone-nav').appendTo('body').addClass('is-show');
    } else {
      $('header').clone().addClass('clone-nav').appendTo('body').removeClass('is-show');
    }
  });

  // Resizeイベント
  $(window).resize(function() {
    controlCardDummy();
  });

  // ハンバーガー
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('hamburger-menu-active')
  });

  // 最後に実行
  controlCardDummy();
});

// ダミー .card を作成
function controlCardDummy() {
  const length = $('.card').length;
  const count = ($(window).width() >= 1400) ? length % 4 : length % 3;
  const add = Math.abs( (($(window).width() >= 1400) ? 4 : 3) - count);

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