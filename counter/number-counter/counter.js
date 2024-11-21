var a = 0;
$(window).scroll(function() {

  var oTop = $('.mu-single-counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
            // for comma
            //$this.text(Math.floor(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
          },
          complete: function() {
            $this.text(this.countNum);
            // for comma
            //$this.text(Math.floor(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});