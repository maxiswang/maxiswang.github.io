note = null;
randIndex = -1;
noteArr = [
	"I use the tag \"Maxillow\" online, but use \"maxiswang\"\n for work tied to my real name.", 
	"I can crochet and knit,\nbut I'm better at knitting.", 
	"My name came from the\nvideo game \"Dark Cloud 2\"!", 
	"I'm transmasc, agender, poly, and bisexual!",
	"This website is made by hand and coded entirely within Notepad++!",
	"The corkboard texture is an edited texture from Deltarune.",
	"I have over\n250 Steam games, and my account is over\n10 years old!",
	"I usually set my birthday to be off by a day for privacy,\nbut it's in early October.",
	"I have many fake internet aliases which I use to avoid being easily traceable.",
	"My favorite movie is \"Everything Everywhere All at Once\"!",
	"My favorite content creator is probably Jerma985.",
	"My favorite content creator is possibly Markiplier.",
	"My favorite content creator is perchance Drew Gooden.",
	"My favorite content creator is peradventure DougDoug.",
	"My favorite hypothetical band is\nOne Trait Danger.",
	"My favorite\nreal band is\nThe Toxhards.",
	"My favorite song of all time is \"Home\" by Cavetown.",
	"My favorite album is \n\"When Death Was Mine\" \nby Zalinki.",
	"My second favorite album is \"Postmodern Love\" by Jreg.",
	"My favorite vocaloid is Kasane Teto.",
	"My favorite TTS voice is SAM.",
	"My most embarrassing fact about myself is that I like South Park.",
	"My favorite TV show is Smiling Friends.",
	"My favorite internet cat is Jambo,\nwho is owned by Jschlatt.",
	"My family owns a black cat named Mel. She is our first cat, and is four years old!",
	"I owned six goldfish as a kid. I named them all Ponyo.",
	"I have many favorite video games, but one of them is Inscryption.",
	"I have many favorite video games, but one of them is Deltarune.",
	"I have many favorite video games, but one of them is Shipwrecked 64.",
	"I have many favorite video games, but one of them is Animal Well.",
	"I have many favorite video games, but one of them is Minecraft.",
	"My least favorite game series that I keep up with is Garten of Banban.",
	"My therapist is concerned about my sleep schedule.",
	"I instinctually respond to the title of \"Creature\".",
	"I started using the name \"Max\" before deciding on \"Maxwell\".",
	"I had a weird obsession with Good Luck Charlie's Bob Duncan in high school.",
	"I terrorized my friends with a Discord Bot named Adam Bot for several years.",
	"My Scratch account is\n11 years old.",
	"My fursona is either a deer\nor a rat-thing.",
	"I used to ice skate,\nbut stopped right before learning axels.",
	"My favorite animal are tigers, \nbut I love all big cats.",
	"My favorite color used to be \"rainbow\"\nas a cop-out because I loved all colors.",
	"My favorite color used to be yellow,\nbut it's now purple.",
	"I managed to acquire and\nre-publicize a piece of lost media anonymously.",
	"The main two colors in my wardrobe are\nblue and black.",
	"I prefer \nCoca-Cola\nover Pepsi,\ntaste-wise.",
	"The game my family plays together is\nAge of\nEmpires 2.",
	"The first game I finished was World of Goo.",
	"The first game I asked for from my parents was Undertale.",
	"My internet role models are Louie Zong and Markiplier.",
	"My main goal when I enter a thrift store is to find one piece of semi-niche merch.",
	"I own two Blahaj sharks. One of them is smaller.",
	"I can play the ukulele, but not well."
	//"Yes, I'm a furry.\nSorry."
	//"I often have realistic dreams and get deja-vu throughout the day of things that could happen."
]


window.onload = (event) => {
	note = document.getElementById("postit2");
	const pSub = note.childNodes[0].nextSibling;
	
	note.onclick = function(){
		pSub.innerText = randText();
	}
};

noteArr.sort(function(){return 0.5 - Math.random()});

function randText() {
	if ( randIndex == noteArr.length - 1 ) {
		randIndex = 0;
	} else {
		randIndex++;
	}
	
	return noteArr[randIndex];
}