/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
jQuery(document).ready(function($) {
	"use strict";

	//setup parallax
	$.stellar();

	$('nav#menu').mmenu({
		wrappers: ["wordpress"]
	});

	$(".menu-item-has-children").on("click", function() {
		if ($(".menu-link").hasClass("active")) {
			$(this)
				.find(".sub-menu")
				.toggle();
		}
	});

	$(".gallery,.single-featured").magnificPopup({
		delegate: "a", // child items selector, by clicking on it popup will open
		type: "image",
		removalDelay: 300,
		mainClass: "mfp-fade",
		gallery: {
			enabled: true
		}
	});

	$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	//owl carousel
	$(".wpb_row .client").owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		autoHeight: true,
		margin: 20,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 6
			}
		}
	});

	$(".single-project .gallery").owlCarousel({
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		margin: 30,
		items: 1
	});

	$(".counter h2").counterUp({
		delay: 10,
		time: 3000
	});

	$(".single-project .wpb_gallery .wpb_image_grid_ul").owlCarousel({
		nav: false,
		dots: false,
		loop: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		margin: 10,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 6
			}
		}
	});

	// mini-cart
	var $mini_cart = $(".mini-cart");
	$mini_cart.on("click", function(e) {
		$(this).addClass("open");
	});

	$(document).on("click", function(e) {
		if ($(e.target).closest($mini_cart).length == 0) {
			$mini_cart.removeClass("open");
		}
	});

	// search in menu
	var $search_btn = $(".search-box > i"),
		$search_form = $("form.search-form");

	$search_btn.on("click", function() {
		$search_form.toggleClass("open");
	});

	$(document).on("click", function(e) {
		if (
			$(e.target).closest($search_btn).length == 0 &&
			$(e.target).closest("input.search-field").length == 0 &&
			$search_form.hasClass("open")
		) {
			$search_form.removeClass("open");
		}
	});

	jQuery("li.product").matchHeight({ byRow: true });
});
