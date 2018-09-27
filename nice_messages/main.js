//before i forget
//main-text class needs to 
//1) change which one is shown after click

var textArr = [
	"have a stellar day",
	"you're gonna crush it today",
	"hey. you're pretty rad my dude",
	"i think you're an excellent example of humanity",
	"a paragon of being super cool, if you will",
	"these messages were not made by aliens pretending to be humans",
	"that'd be crazy",
	"you know what isn't crazy though?",
	"hiring me",
	"this was inspired by a super cute game called Donut County",
	"if you have twelve bucks go buy it",
	"you get to be a raccoon that steals trash",
	"in a cute world",
	"and tbh it was adorable",
	"support indie creators",
	"and do something fun",
	"thanks for your time today",
	"i hope you have a lovely rest of your day <3"
]

var text = document.getElementById("maintext");
var i = -1;

function itClicked(){
	i++;
	text.innerHTML = textArr[i];
	

	if(i > textArr.length-1){
		i = 0;
		text.innerHTML = textArr[i];
	}

}