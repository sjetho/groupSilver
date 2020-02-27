/*  ---------------------------------------------------
Theme Name: Cross Fit
Description: Cross Fit HTML Template
Author: colorlib
Author URI: https://www.colorlib.com/
Version: 1.0
Created: colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {
    
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Search model
	--------------------*/
	$('.search-trigger').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero-items");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.pop-up').magnificPopup({
        type: 'iframe'
        
    });

    // (function ($) {
    //     $(document).ready(function () {
    //         $('.pop-up').magnificPopup({
    //             disableOn: 100,
    //             type: 'iframe',
    //             mainClass: 'mfp-fade',
    //             removalDelay: 160,
    //             preloader: false,
    //             fixedContentPos: false
    //         });
    //     });
    // })(jQuery)

    /*------------------
        About Counter Up
    --------------------*/
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Elements Counter UP
    --------------------*/
    $('.mile-counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
        Progress Loader
    --------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-value"><span class="loader-percentage">'+ cpvalue +'<sup class="percentage-sign">%</sup></span></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 190,
                thickness: 5,
                startAngle: -190,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 187,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}
	});


})(jQuery);



$(document).ready((e) => {
    $("#nick").click((e) => {
        let x = $(".team-info-nick").slideToggle();



    });

});

$(document).ready(e => {
    $("#kazim").click(e => {
        let x = $(".team-info-kazim").slideToggle();
    });
});


$(document).ready(e => {
    $("#steven").click(e => {
        let x = $(".team-info-steven").slideToggle();
    });
});


$(document).ready(e => {
    $("#sean").click(e => {
        let x = $(".team-info-sean").slideToggle();
    });
});
////like button code///
let clickcount1 = 0;
let likebutton1 = document.querySelector('#likes-button-1')
//
likebutton1.addEventListener('click', function () {

    clickcount1 += 1;

    let likecount1 = document.querySelector('#count-likes-1')

    likecount1.textContent = clickcount1.toString();

})

let clickcount2 = 0;
let likebutton2 = document.querySelector('#likes-button-2')
let like2 = "like";
//
likebutton2.addEventListener('click', function () {

    clickcount2 += 1 ;

    let likecount2 = document.querySelector('#count-likes-2')

    let like2 = document.querySelector('#like2')

    likecount2.textContent = clickcount2.toString();
    like2.textContent = like2.toString();
})

let clickcount3 = 0;
let likebutton3 = document.querySelector('#likes-button-3')
//
likebutton3.addEventListener('click', function () {

    clickcount3 += 1;

    let likecount3 = document.querySelector('#count-likes-3')

    likecount3.textContent = clickcount3.toString();

})

let clickcount4 = 0;
let likebutton4 = document.querySelector('#likes-button-4')
//
likebutton4.addEventListener('click', function () {

    clickcount4 += 1;

    let likecount4 = document.querySelector('#count-likes-4')

    likecount4.textContent = clickcount4.toString();

})

let clickcount5 = 0;
let likebutton5 = document.querySelector('#likes-button-5')
//
likebutton5.addEventListener('click', function () {

    clickcount5 += 1;

    let likecount5 = document.querySelector('#count-likes-5')

    likecount5.textContent = clickcount5.toString();

})

let clickcount6 = 0;
let likebutton6 = document.querySelector('#likes-button-6')
//
likebutton6.addEventListener('click', function () {

    clickcount6 += 1;

    let likecount6 = document.querySelector('#count-likes-6')

    likecount6.textContent = clickcount6.toString();

})

let clickcount7 = 0;
let likebutton7 = document.querySelector('#likes-button-7')
//
likebutton7.addEventListener('click', function () {

    clickcount7 += 1;

    let likecount7 = document.querySelector('#count-likes-7')

    likecount7.textContent = clickcount7.toString();

})

let clickcount8 = 0;
let likebutton8 = document.querySelector('#likes-button-8')
//
likebutton8.addEventListener('click', function () {

    clickcount8 += 1;

    let likecount8 = document.querySelector('#count-likes-8')

    likecount8.textContent = clickcount8.toString();

})

let clickcount9 = 0;
let likebutton9 = document.querySelector('#likes-button-9')
//
likebutton9.addEventListener('click', function () {

    clickcount9 += 1;

    let likecount9 = document.querySelector('#count-likes-9')

    likecount9.textContent = clickcount9.toString();

})(jQuery);