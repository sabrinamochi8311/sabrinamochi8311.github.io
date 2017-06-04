$("h1 a").mouseenter(function(){
    $("section").css("background","rgba(0,0,0,0)")
}).mouseleave(function(){
    $("section").css("background","rgba(0,0,0,1)")
});
window.onload=scaleVideo;
window.onresize=scaleVideo;

function scaleVideo(){
    var video = document.getElementById('video');
    //get window size
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    
    //get movie size
    var videoWidth = video.offsetWidth;
    var videoHeight = video.offsetHeight;
    
    //Scale the ratio
    var widthScale = windowWidth / videoWidth;
    var heightScale = windowHeight / videoHeight;
    
    //以影片高度為基準的縮放比
    if( widthScale > heightScale){
        var scale = widthScale;
    }else{
        var scale = heightScale;
    }
    
    //取得放大後的寬高
    var scarlVideoWidth = videoWidth * scale;
    var scarlVideoHeight = videoHeight * scale; 
    
    video.width=scarlVideoWidth;
    video.height=scarlVideoHeight;
    
    video.loop=true;
    video.muted=true;
}


window.addEventListener("scroll",parallax,false);
function parallax(){
    var palx1 = document.getElementById('palx1');
//    var palx2 = document.getElementById('palx2');
//    var here = document.getElementById('here');
    var scroll = window.pageYOffset;
    palx1.style.top = (window.pageYOffset*1)+"px";
//    palx2.style.left = (window.pageYOffset*4)+"px";
//    here.innerHTML = scroll;
}

//=====================================//
//======== Font license info  =========//
//=====================================//
/*    
## Entypo
   Copyright (C) 2012 by Daniel Bruce
   Author:    Daniel Buce
   License:   SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.entypo.com

## Font Awesome
   Copyright (C) 2012 by Dave Gandy
   Author:    Dave Gandy
   License:   CC BY 3.0 (http://creativecommons.org/licenses/by/3.0/)
   Homepage:  https://fortawesome.github.com/Font-Awesome/

## Web Symbols
   Copyright (c) 2011 by Just Be Nice studio. All rights reserved.
   Author:    Just Be Nice studio
   License:   SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.justbenicestudio.com/studio/websymbols/
*/
//=====================================//


$('nav ul#main_nav').on('click','li',function(){
	var $type=$(this).attr('data-title');
	$('nav ul#main_nav li').removeClass('active')
	if ($type=='all') {
		$('nav ul#main_nav li').addClass('active');
		$('div#timeline_container >ul> li').removeClass('hidden');
		$('div#timeline_container >ul> li').removeClass('active');
		$($('div#timeline_container >ul> li')[0]).addClass('active');
	} else {
		$(this).addClass('active');
		$('div#timeline_container >ul> li').addClass('hidden');	
		$('div#timeline_container >ul> li.'+$type+'_event').removeClass('hidden');
		$('div#timeline_container >ul> li').removeClass('active');
		$($('div#timeline_container >ul> li.'+$type+'_event')[0]).addClass('active');
	}
			
});

$(document).on('scroll',function(){
	$('div#instructions_container').fadeOut('fast');
	$('div#info_container').fadeIn('fast');
});
$(document).on('click','div#info_container',function(){
	$('div#instructions_container').fadeIn('fast');
	$('div#info_container').fadeOut('fast');
});

$(document).on('click','li.icon-down-open',function(){
	scrollToNext();
});

$(document).on('click','li.icon-up-open',function(){
	scrollToPrev();
});

$(document).on('keypress',function(e){
	if(e.which==106) {
		scrollToNext();
	} else if(e.which==107) {
		scrollToPrev();
	}
});

$('div#timeline_container').on('click','li', function(){
	showNext($(this));
});

function showNext(li){
	var $itms=$('div#timeline_container li');
	$itms.removeClass('active');
	$(li).addClass('active');
	$('html,body').stop().animate({ scrollTop: $(li).offset().top-$(li).height()}, 500,function(){
		$('html,body').stop();
	});
}

function scrollToNext() {
	var $itms=$('div#timeline_container > ul > li');
	var $current=$itms.index($('div#timeline_container li.active'));
	
	if ($($itms[$current+1]).length>0 && !$($itms[$current+1]).hasClass('hidden')) {
		$itms.removeClass('active');
		$($itms[$current+1]).addClass('active');
		$('html,body').stop().animate({ scrollTop: $($itms[$current+1]).offset().top-$($itms[$current+1]).height()}, 500);
	} else {
		$('html,body').stop().animate({ scrollTop: $(document).height()}, 500);
	}
}
function scrollToPrev() {
	var $itms=$('div#timeline_container > ul > li');
	var $current=$itms.index($('div#timeline_container li.active'));
	
	if ($($itms[$current-1]).length>0 && !$($itms[$current-1]).hasClass('hidden')) {
		$itms.removeClass('active');
		$($itms[$current-1]).addClass('active');
		$('html,body').stop().animate({ scrollTop: $($itms[$current-1]).offset().top-$($itms[$current-1]).height()}, 500);
	} else {
		$('html,body').stop().animate({ scrollTop: 0}, 500);
	}
}


var myName = "Chefspeare";

var red = [207, 76, 21];
var orange = [198, 100, 14];
var green = [219, 22, 46];
var blue = [173, 69, 20];
var purple = [200, 31, 52];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();