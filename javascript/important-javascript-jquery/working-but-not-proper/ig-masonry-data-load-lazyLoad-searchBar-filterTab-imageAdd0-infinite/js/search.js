$(document).ready(function(){
    $(".search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".grid .item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });