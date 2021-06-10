// ページ内リンク
$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

// ヘッダースクロール処理
$(function(){
	var imgHeight = $('#mainvisual').outerHeight();
	// ここの範囲は検討
	var header = $('.nav-list');

	$(window).on('load scroll',function(){
		if($(window).scrollTop() < imgHeight){
			header.removeClass('headercolor-scroll');
		}else {
			header.addClass('headercolor-scroll');
		}
	});
});


// ハンバーガーメニュー

// ボタン部分
$(".openbtn").click(function () {
    $(this).toggleClass('active');
});

// 操作
$(".humburger button").click(function(){
    $(".sp-mainmenu").toggleClass("active");
});