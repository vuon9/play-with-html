
$(document).ready(function() {
  $('.search-input').bind('blur', function() {
     this.value=!this.value?'Search Daftstar':this.value;
  });

  $('input.search-input').bind('click', function() {
      if(this.value=='Search Daftstar')
      this.value='';
  });

  $('.search-city .search-input2').bind('blur', function() {
     this.value=!this.value?'City Search':this.value;
  });

  $('.search-city input.search-input2').bind('click', function() {
      if(this.value=='City Search')
      this.value='';
  });

  $('.search-video .search-input3').bind('blur', function() {
     this.value=!this.value?'Artist, Song Title, etc.':this.value;
  });

  $('.search-video input.search-input3').bind('click', function() {
      if(this.value=='Artist, Song Title, etc.')
      this.value='';
  });

});

