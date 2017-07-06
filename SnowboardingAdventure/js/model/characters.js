/* 
Use constructor notation to create classes  to create
multiple characters, program multiple attributes and 
chance situations. Add functions to class objects w/
className.prototype.newFunction = function() {};
use this to map attributes to functions(chance situations)
If there is only one of a character use a simple object
*/
var Snowbum = function(name, sport, competitions, helmet) {
	this.name = name;
	this.sport = sport;
	this.competitions = [competitions];
    this.helmet = helmet;
	this.rank = 0;
	this.steez = {
		noviceSB: "Gesundheit!",
		beginnerSB: "I've got enough steeze to go around.",
		amateurSB: "I'm not the steeziest but I got my own style.",
		proSB: "Watch and learn brah.",
		noviceSki: "Is that a snowboard thing?",
		beginnerSki: "I can rip it up.",
		amateurSki: "I prefer the term ripper.",
		proSki: "They call me THE Ripper."
	};
};

Snowbum.prototype.getSteez = function(skillLevel, sport) {
	skillLevel = skillLevel.toLowerCase();
	if(sport === 'snowboarder') {
		switch(skillLevel) {
			case 'novice': 
			  return this.steez.noviceSB;
			  break;
			case 'beginner':
			  return this.steez.beginnerSB;
			  break;
			case 'amateur':
			  return this.steez.amateurSB;
			  break;
			case 'pro': 
			  return this.steez.proSB;
		};
	} else if (sport === 'skier') {
		switch(skillLevel) {
			case 'novice': 
			  return this.steez.noviceSki;
			  break;
			case 'beginner':
			  return this.steez.beginnerSki;
			  break;
			case 'amateur':
			  return this.steez.amateurSki;
			  break;
			case 'pro': 
			  return this.steez.proSki;
		}; 
	}; 
};

var lifty = {
	compete: "Gnarly competition today brah.",
	weather: "It's whiteout brah, ready for the pow-pow?",
	joke1: "What do you get when you cross a vampire and a snowman?\n\n\nA frostbite!",
	joke2:"How many months have 28 days?\n\n\nThey all do!",
	joke3: "Can I get a lift brah?",
	quote: "Alpine rock and steep, deep powder are what I seek, and I will always find solace there."
};
function getLiftyResponse() {
	var num = Math.floor((Math.random() * 6) + 1);
	switch(num) {
		case 1:
		return lifty.compete;
		break;
		case 2:
		return lifty.weather;
		break;
		case 3:
		return lifty.joke1;
		break;
		case 4:
		return lifty.joke2;
		break;
		case 5: 
		return lifty.joke3;
		break;
		case 6:
		return lifty.quote;
		break;
		default:
		return 'Move up to the yellow line.';
	};
};
var Spectator = function(name, specEvents) {
	this.name = name;
	this.competing = false;
	this.specEvents = [specEvents]
};
