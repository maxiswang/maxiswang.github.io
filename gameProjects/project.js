window.onload = (event) => {
	postBack = document.getElementById("postBack");
	postLink = document.getElementById("postLink");
	shade = document.getElementById("shade");

	imgBig = document.getElementById("imgOverlay");
	img1 = document.getElementById("img1");
	img2 = document.getElementById("img2");
	img3 = document.getElementById("img3");
	img4 = document.getElementById("img4");
	
	page = window.location.pathname.split("/").pop();
	gameLink = "";

	if ( page == "foolsGambit.html" ) {
		gameLink = "https://fools-gambit.itch.io/game";
	} else if ( page == "ultimaterps.html" ) {
		gameLink = "/";
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
	
	postLink.onclick = function(){
		window.location.href = gameLink
	}
	
	img1.onclick = function(){
		imgBig.src = img1.src
		shade.style.opacity = 1;
		shade.style.pointerEvents = "auto";
		disableScroll();
	}
	
	img2.onclick = function(){
		imgBig.src = img2.src
		shade.style.opacity = 1;
		shade.style.pointerEvents = "auto";
		disableScroll();
	}
	
	if (img3 != null){
		img3.onclick = function(){
			imgBig.src = img3.src
			shade.style.opacity = 1;
			shade.style.pointerEvents = "auto";
			disableScroll();
		}
	}
	
	if (img4 != null){
		img4.onclick = function(){
			imgBig.src = img4.src
			shade.style.opacity = 1;
			shade.style.pointerEvents = "auto";
			disableScroll();
		}
	}
	
	shade.onclick = function(){
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