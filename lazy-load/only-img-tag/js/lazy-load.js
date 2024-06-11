(function($) {
  let images;
  $.fn.lazyLoad = function() {
    $(this).addClass('lazy-load');
    $(this).find('img').each((k, v) => {
      $(v).attr('data-src', $(v).attr('src')).removeAttr('src');
    })
    let load = (image) => {
      if ($(image).position().top - $(window).scrollTop() < $(window).innerHeight()) { 
        $(image).attr('src', $(image).attr('data-src')); 
        $(image).one('load', () => { 
          $(image).addClass('loaded').removeAttr('data-src'); 
          images = $(this).find('img:not(.loaded)'); 
          if (images.length > 0) load($(images)[0]);
          else $(this).addClass('loaded'); 
        }).each((k, v) => {
          if (v.complete) $(v).trigger('load'); 
        })
      }
    }
    $(window).scroll(() => {
      if (images.length > 0) load($(images)[0]);
    });
    images = $(this).find('img:not(.loaded)');
    if (images.length > 0) load($(images)[0]);
  }
}(jQuery));