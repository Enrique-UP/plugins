$(document).ready(function(){
    $(".header").html("<div class='box'><h2>header</h2><div class='visible-desktop visible-tablet hidden-phone row-fluid'><ul class='nav nav-pills nav-stacked pull-left span6'><li><a href='#'>item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul><ul class='nav nav-pills nav-stacked pull-left span6'><li><a href='#'>Item</a><!--sdafdsf--></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul></div><div class='hidden-desktop hidden-tablet visible-phone row-fluid'><ul class='nav nav-pills nav-stacked pull-left span6'><li><!--sdafdsf--><a href=''>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul></div><div class='clearfix'></div></div><!--sdafdsf-->");

    $(".footer").html("<div class='box'><h2>footer</h2><div class='visible-desktop visible-tablet hidden-phone row-fluid'><ul class='nav nav-pills nav-stacked pull-left span6'><li><a href='#'>item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul><ul class='nav nav-pills nav-stacked pull-left span6'><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul></div><div class='hidden-desktop hidden-tablet visible-phone row-fluid'><ul class='nav nav-pills nav-stacked pull-left span6'><li><a href=''>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li><li><a href='#'>Item</a></li></ul></div><div class='clearfix'></div></div>");
    
    //don't use .text()
    $("head").html('<title>Lorem</title><link rel="stylesheet" type="text/css" href="css.css" />');

    $("head").prepend($("<script></script>").attr("src", "abc.js"));
    $("head").append($("<script></script>").attr("src", "def.js"));    
    $("head").append('<script src="' + 'hij.js' + '"></script>');
});

document.querySelector("section").innerHTML = "<div><div><div><div><div>sadf</div></div><div>sdaf</div></div></div></div>";