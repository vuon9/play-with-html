$(function(){
    initSnippet2();
});

function initSnippet2(){
	$('.title').hover(function(){
      width = $(this).width() + 35;
      snippet = $(this).find('.snippet2');
      snippet.css('margin-left', width);
      snippet.show();
    }, function(){
      snippet.hide();
    });
}