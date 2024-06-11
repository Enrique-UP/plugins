$(document).ready(function(){
    // for tabs search
    $(".checkbox_label label :radio").click(function() {
        $(this).closest("label").addClass("active");
        $(this).closest("label").siblings().removeClass("active");

        $(".projects-list .item").hide();
        $(".checkbox_label label :radio:checked").each(function() {
            $("." + $(this).val()).fadeIn('slow');
        });

        $(".input_search input").val("");
    });
    // for input search
    $(".input_search input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".projects-list .item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    $(".input_search input").on("click", function() {
      $(".checkbox_label label").removeClass("active");
      $(".checkbox_label label:first-child").addClass("active");
      $(".projects-list .item").fadeIn();
    });
    
  });