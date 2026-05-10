
window.onload = (event) => {
	back = document.getElementById("postit1");

	foolsGambit = document.getElementById("foolsGambit");
	
	back.onclick = function(){
		window.location.href = "./index.html"
	}
	
	foolsGambit.onclick = function(){
		window.location.href = "./gameProjects/foolsGambit.html"
	}
	
	bonnethead.onclick = function(){
		window.location.href = "./gameProjects/bonnethead.html"
	}
	
	rps.onclick = function(){
		window.location.href = "./gameProjects/ultimaterps.html"
	}
	
	laidtorest.onclick = function(){
		window.location.href = "./gameProjects/laidtorest.html"
	}
	
	snorks.onclick = function(){
		window.location.href = "./gameProjects/snorks.html"
	}
};
