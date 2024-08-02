var isOpen = false;

$(function(){
  initSearchContent();
  initFilter();
});

function initSearchContent(){
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var socialLink = $('.socials');
  var iconSearch = $('.fa-search');

  submitIcon.click(function(){
    if(isOpen == false){
      searchBox.addClass('searchbox-open');
      inputBox.focus();
      socialLink.hide();
      iconSearch.addClass('green');
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
      iconSearch.removeClass('green');
      setTimeout(function(){ socialLink.show(); }, 400);
     }
  });

  submitIcon.mouseup(function(){
    return false;
   });

   searchBox.mouseup(function(){
    return false;
   });

  $(document).mouseup(function(){
   if(isOpen == true){
    $('.searchbox-icon').css('display','block');
      submitIcon.click();
    }
  });
}

function buttonUp(){
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
    $('.searchbox-icon').css('display','none');
  } else {
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display','block');
  }
}

function initFilter(){
  var liFinder = $('ul.finder li');
  var iconArrow = $('.finder > li > a i');
  var classStyle = 'icon-arrow-up';
  liFinder.hover(function(){
    iconArrow.addClass(classStyle);
  },  function(){
    iconArrow.removeClass(classStyle);
  });
}