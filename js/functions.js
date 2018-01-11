var numPages = 14;
var inverted = false;
var page = 'resume';

if (document.images)
{
	preload_image_object = new Image();
	// set image url
	image_url = new Array();
	image_url[0] = "images/logo_inv.png";
	image_url[1] = "images/logo.png";
	
	var i = 0;
	for(i=0; i<=1; i++) 
		preload_image_object.src = image_url[i];
}

$.ajaxSetup({
	cache: false
});

$(document).ready(function() {
	$('#logo').mouseenter(function(e){
		$(e.target).attr('src','images/logo_inv.png');
		$('body').css('background-color','#000000');
	});
	$('#logo').mouseleave(function(e){
		$(e.target).attr('src','images/logo.png');
		$('body').css('background-color','#FFFFFF');
		if (page == 'resume') {
			page = 'ideas';
			$('#container').load('home.html', function() {
				createIdeas();
				if (window.location.hash) {
					var hash = window.location.hash.replace(/^.*#/, '');
					$('#content').load('content'+hash+'.html');
				}
			});
		}
		else {
			page = 'resume';
			$('#container').load('resume.html', function() {
				
			});
		}
	});
});


function createIdeas() {
	for (i=1;i<=numPages;i++) {
		$('<div id="'+i+'" class="idea"></div>').appendTo('#ideas');
	}

	if (!inverted) {
		$('.idea').mouseenter(function(e) {
			$('.idea').css('background-color', '#FFFFFF');
			$('body').css('background-color', '#000000');
		});
		$('.idea').mouseleave(function(e) {
			$('.idea').css('background-color', '#000000');
			$('body').css('background-color', '#FFFFFF');
		});
	}
	else {
		$('.idea').mouseenter(function(e) {
			$('.idea').css('background-color', '#000000');
			$('body').css('background-color', '#FFFFFF');
		});
		$('.idea').mouseleave(function(e) {
			$('.idea').css('background-color', '#FFFFFF');
			$('body').css('background-color', '#000000');
		});
	}

	$('.idea').click(function(e) {
		$('#content').load('content/'+e.target.id+'.html');
	});
}
