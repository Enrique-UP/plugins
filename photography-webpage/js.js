$(document).ready(function(){
	
	$('.photo-thumbnails .thumbnail').click(function() {
		// Setting class "current" to the thumbnail that was clicked.
		$('.photo-thumbnails .thumbnail').removeClass('current');
		$(this).addClass('current');
		// Getting "src" attribute of the image that was clicked.
		var path = $(this).find('img').attr('src');
		// Setting "src" attribute of the big image.
		$('#big-photo img').attr('src', path);
	});
		  
});  

window.onresize=function(){
	if(window.innerWidth<1000){
		$(".nav ul.navigation-bar").hide();
		  $(".navigation-bar-button").show();
		}else{
		  $(".navigation-bar-button").hide();
		  $(".nav ul.navigation-bar").show();
		}
	}
$(".navigation-bar-button").click(function(){
	$(".nav ul.navigation-bar").fadeToggle();
});



/*responsive js like media query of css*/
/*window.onresize=function(){
    if(window.innerWidth >= 768 && window.innerWidth <= 991 ){
        location.reload();
    }
    else if(window.innerWidth <= 460 ){
        location.reload();
    }
};*/