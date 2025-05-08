'use strict';

$(function () {
  // ページトップへボタン
  const pagetop = $('.page-top');

  // スクロールイベント
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  // ページトップへスムーススクロール
  pagetop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500, 'swing');
  });

  // ハンバーガーメニューの開閉処理
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.g-nav').toggleClass('open'); // 修正: `slide` ではなく `open` クラスを使用
    $('.hamburger i').toggleClass('fa-bars fa-xmark');
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    let target = $(this).attr('href');  
    let position = $(target).offset()?.top || 0;  

    $('.hamburger').removeClass('open');
    $('.g-nav').removeClass('open'); // 修正: `slide` ではなく `open` を削除

    $('html, body').animate({ scrollTop: position }, 300, 'swing');
  });
});

