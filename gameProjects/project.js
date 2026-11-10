window.onload = (event) => {
	postBack = document.getElementById("postBack");
	postLink = document.getElementById("postLink");
	shade = document.getElementById("shade");

	imgBig = document.getElementById("imgOverlay");
	//img1 = document.getElementById("img1");
	//img2 = document.getElementById("img2");
	//img3 = document.getElementById("img3");
	//img4 = document.getElementById("img4");
	allImgs = document.querySelectorAll(".clickableImg");
	cardImgs = document.querySelectorAll(".cardImg");
	
	page = window.location.pathname.split("/").pop();
	gameLink = "";

	if ( page == "foolsGambit.html" ) {
		gameLink = "https://fools-gambit.itch.io/game";
	} else if ( page == "ultimaterps.html" ) {
		gameLink = "./";
	} else if ( page == "bonnethead.html" ) {
		gameLink = "https://maxiswang.itch.io/gmap-102-1";
	} else if ( page == "laidtorest.html" ) {
		gameLink = "https://maxiswang.itch.io/gmap-102-2";
	} else if ( page == "snorks.html" ) {
		gameLink = "https://maxiswang.itch.io/gmap-102-3";
	} else {
		gameLink = "Something has gone horribly wrong.";
	}		
	
	
	postBack.onclick = function(){
		window.location.href = "../index.html"
	}
	
	if( postLink != null) {
		postLink.onclick = function(){
			window.location.href = gameLink
		}
	}
	
	 
	
	allImgs.forEach((img) => {
	  img.addEventListener('click', function() {
		imgBig.src = img.src
		shade.style.opacity = 1;
		shade.style.pointerEvents = "auto";
		disableScroll();
	  });
	});
	
	cardImgs.forEach((img) => {
	  img.addEventListener('click', function() {
		imgBig.src = img.src.replace("CHARACTER_ARTS_ASSIGNMENT4", "FINAL_CARDS_ASSIGNMENT4");
		console.log(img.src);
		shade.style.opacity = 1;
		shade.style.pointerEvents = "auto";
		disableScroll();
	  });
	});
	
	shade.onclick = function(){
		shade.style.opacity = 0;
		shade.style.pointerEvents = "none";
		enableScroll();
	}
	
	imgBig.onclick = function(){
		shade.style.opacity = 0;
		shade.style.pointerEvents = "none";
		enableScroll();
	}
};


function disableScroll() {
	scrollTop =
		window.pageYOffset;

	window.onscroll = function () {
		window.scrollTo(0, scrollTop);
	};
}

function enableScroll() {
	window.onscroll = function () { };
}