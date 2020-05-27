$( document ).ready(function() {
    
	// Add spans to .you-so-sexy class
	$('.you-so-sexy').each( function() {
	  var thisText = $(this).text();
		thisText = addSpans(thisText);
		$(this).html(thisText);
	});

	// Add spans function
	function addSpans(word){
	  return word.split('').map(function (char) { 
	  	if ( char == " ") {
		    return ' '; 
		  	} else {
		    return '<span>' + (char) + '</span>'; 
		}
	  }).join("");
	}


	// Function trigger
	var i = 0;

	setInterval(stepper, 10);

	function stepper() {
	  counter();
	}

	function counter() {
	 i++;
	  if (i % 10 == 0) {
	    addClass();
	    startTyping("quit-your-job");
	    startTyping2("get-a-job");
	  }
	  if (i % 500 == 0) {
			imgCarousel("top-carousel",3,"andreabravo");
			imgCarousel("andreabravo",3,"andreabravo");
			imgCarousel("sex",4,"sex")
			imgCarousel("tiny",4,"sex")
			imgCarousel("nakadaska",3,"nakadaska");
			imgCarousel("person",4,"person");
			imgCarousel("person2",4,"person2");
			imgCarousel("abstract2",3,"abstract");
			imgCarousel("abstract3",3,"abstract3");

		}
		

		if (i % 1000 == 0) {
			i = 0;
		}
	}


	// Add classes to .you-so-sexy	
	var classes = ["red", "green", "blue"];

	function addClass() {
	  $('.you-so-sexy span').eq(Math.floor(Math.random()*$('.you-so-sexy span').length)).removeClass().addClass(classes[Math.floor(Math.random()*classes.length)]);
	}



	// Auto write
	var text;
	var textArray;
	var j = 0;

	function autoType(className) {
	  text = $('.' + className).text();
	  $('.' + className).text("");
	  textArray = text.split("");
	  console.log(textArray);
	}

	function startTyping(className) {
	  $('.' + className).text( $('.' + className).text() + textArray[j] );
	  j++;
	  if ( j >= textArray.length ) {
	    $('.' + className).text("");
	    j = 0;
	  }
	}

	autoType('quit-your-job');



		// Auto write2
	var text2;
	var textArray2;
	var j2 = 0;

	function autoType2(className) {
	  text2 = $('.' + className).text();
	  $('.' + className).text("");
	  textArray2 = text2.split("");
	  console.log(textArray2);
	}

	function startTyping2(className) {
	  $('.' + className).text( $('.' + className).text() + textArray2[j2] );
	  j2++;
	  if ( j2 >= textArray2.length ) {
	    $('.' + className).text("");
	    j2 = 0;
	  }
	}

	autoType2('get-a-job');



	// Image carousel
	function imgCarousel(className, images, folder) {
		var image = $('.' + className);
		var imgNum = Math.floor(Math.random()*images)+1;
		image.css("background-image", "url(img/" + folder + "/" + imgNum + ".jpg)");
	}

	// Video carousel
	function videoCarousel(className, videos, folder) {
		var video = $('.' + className + ' source');
		var videoNum = Math.floor(Math.random()*videos)+1;
		video.attr("src", "video/" + folder + "/" + videoNum + ".mp4");
		$('.' + className)[0].load();
	}

});





