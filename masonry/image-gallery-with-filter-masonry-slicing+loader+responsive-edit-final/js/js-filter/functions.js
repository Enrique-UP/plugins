(function($,sr){
  // http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function(func, threshold, execAsap) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 50);
    };
  };

  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function ($) {

  "use strict";

  // Initiating Isotope
  var $container = $('.projects-list');
  var colWidth = function () {
    var w = $container.width(),
      columnNum = 2,
      columnWidth = 0;
      // this css work according to projects-list width not the width of window
    if (w > 1199)     {columnNum  = 2;} //30px difference in this width as 1169px=1199px
    else if (w > 991) {columnNum  = 2;}
    else if (w > 767) {columnNum  = 2;}
    else if (w > 610) {columnNum  = 2;}
    else if (w > 450) {columnNum  = 2;}
    else if (w > 309) {columnNum  = 1;}
    columnWidth = Math.floor(w/columnNum);
    columnWidth = columnWidth - 0;
    // Item width
    $container.find('.project-item').each(function() {
      var $item = $(this);
      var multiplier_w = $item.attr('class').match(/item-w(\d)/);
      var width = multiplier_w ? columnWidth*multiplier_w[1]-0 : columnWidth-0;
      // Update item width
      $item.css({
        width: width
      });
    });
    return columnWidth;
  };
  var isotope = function () {
    $container.isotope({
      resizable: false,
      itemSelector: '.project-item',
      masonry: {
        columnWidth: colWidth(),
        gutter: 0
      }
    });
  };

  $(document).ready(function(){
    $('#filterNav').find('li.active');
    $container.isotope({
        filter: $("li.active").attr('data-filter')
    });
  });
  // Activating Isotope Filter Navigation
  $('#filterNav').on('click', 'li', function () {
    // remove active previous
    $('#filterNav').find('li').removeClass('active');
    // Add active class
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
  });

  // Calling Isotope
  isotope();
  $(window).smartresize(isotope);

  // Call after content loading
  $(window).load(function () {
    isotope();
  });

})(jQuery);