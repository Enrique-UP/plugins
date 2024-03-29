(function($) {
	
	"use strict";
	
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			//var scrollLink = $('.scroll-to-top');
			if (windowpos >= 60) {
				siteHeader.addClass('fixed-header');
				//scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				//scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	//Open Main Menu
	if($('.main-header-bar .nav-toggler .toggler-btn').length){
		$('.main-header-bar .nav-toggler .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$('.main-nav-outer').toggleClass('now-visible');
		});
	}
	
	//Main Menu Dropdown Toggle
	if($('.main-nav-box .navigation > li.dropdown > ul').length){
		
		//Show Submenu
		$('.main-nav-box .navigation > li.dropdown > a').on('click', function(e) {
			e.preventDefault();
			$(this).parent('li').addClass('open');
			$(this).parents('.navigation').addClass('subnav-visible');
		});
		
		//Hide Submenu
		$('.main-nav-box .navigation li > a[href="#menu-back"]').on('click', function(e) {
			e.preventDefault();
			$(this).parents('.navigation').removeClass('subnav-visible');
			$(this).parents('li').removeClass('open');
		});
		
	}
	
	//Submenu Dropdown Toggle
	if($('.header-style-two li.dropdown ul').length){
		$('.header-style-two li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.header-style-two li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.header-style-two .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// hidding submenu 
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('li.dropdown > a').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this).parent('li.dropdown').children('ul').slideToggle();
	
				// adding class to item container
				$(this).parent().toggleClass('open');
	
				return false;
	
			});
		});
	}
	
	hiddenBarMenuConfig();
	
	
	
	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}
	
	//Update Fixed Nav Position
	function fixedNavStyle() {
		if($('.fixed-top-bar').length){
			var windowHeight = $(window).height();
			var windowpos = $(window).scrollTop();
			var fixedBar = $('.fixed-top-bar');
			if (windowpos >= windowHeight) {
				$('body').addClass('banner-height-reached');
				fixedBar.addClass('now-fixed');
			} else {
				$('body').removeClass('banner-height-reached');
				fixedBar.removeClass('now-fixed');
			}
		}
	}
	
	fixedNavStyle();
	
	//Hide Bootstrap Menu On Click over Mobile View
	$('.scroll-nav li a').on('click', function(){
		var windowWidth = $(window).width();
		if ($(window).width() <= 767) {
			$('.nav-outer .navbar-toggle').trigger( "click" );
		}
	});
	
	
	

})(window.jQuery);