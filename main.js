note = null;
prevNote = -1;
noteArr = [
	"I use the tag \"Maxillow\" online, but use \"maxiswang\"\n for work tied to my real name!", 
	"I can crochet and knit,\nbut I'm better at knitting.", 
	"My name came from the\nvideo game \"Dark Cloud 2\"!", 
	"I'm transmasc, agender, poly, and bisexual!",
	"This website is made by hand, from scratch!",
	"The corkboard texture is an edited texture from Deltarune.",
	"I have over 250 Steam games, and my account is over 10 years old!",
	"I usually set my birthday to be off by a day for privacy,\nbut it's in early October.",
	"My favorite movie is \"Everything Everywhere All at Once\"!",
	"My favorite content creator is probably Jerma985.",
	"My therapist is concerned about my sleep schedule.",
	"I instinctually respond to the title of \"Creature\".",
	"I started using the name \"Max\" before deciding on \"Maxwell\".",
	"I used to ice skate,\nbut stopped right before learning axels.",
	"My favorite animal are tigers, \nbut I love all big cats.",
	"My favorite color used to be \"rainbow\"\nas a cop-out because I loved all colors.",
	"My favorite color used to be yellow,\nbut it's now purple.",
	"The main two colors in my wardrobe are\nblue and black.",
	"I prefer \nCoca-Cola\nover Pepsi,\ntaste-wise."
]


window.onload = (event) => {
	note = document.getElementById("postit2");
	const pSub = note.childNodes[0].nextSibling;
	
	note.onclick = function(){
		pSub.innerText = randText();
	}
};


function randText() {
	randIndex = prevNote;
	while (randIndex == prevNote) {
		//Testing how the text looks in the note...
		//randIndex++;
		//randIndex = noteArr.length - 1;
		randIndex = Math.floor(Math.random() * noteArr.length);
	}
	
	prevNote = randIndex;
	return noteArr[randIndex];
}