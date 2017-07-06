//function newGame() {
	var compete = '';
	var name = '';	
	var specEvents = [];
	//1st CheckIn
	function checkIn() {
  		compete = prompt('Hello, welcome to the SnowGames! Are you ready to compete? (yes/no)');
		if(compete === 'yes') {
			alert('Please proceed to fill out registration!');
		} else if (compete === 'no') {
			name = prompt('Please so provide your name so I can print a spectator ticket:');
			specEvents = prompt('Which events would like to watch: timed race, rail jam, air jam, pipe, or all?')
			if(specEvents === 'all') {
		  		specEvents = ['timed race', 'rail jam', 'air jam', 'pipe'];
		  	} else {
				specEvents = specEvents.split(',');
			};
			console.log(specEvents);
			var spectator = new Spectator(name, specEvents);
		} else {
			alert('Sorry I need a solid yes or no.');
			checkIn();
		};
	};	
	//2nd register
	var contestant;
	var competitions;
	function register() {
	  if(compete === 'yes') {
	  	name = prompt('Ok I just need a few details, and you will be ready to shred! What is your name?');
	  	var sport = prompt('Skier or snowboarder?');
	  	competitions = prompt('Which competitions would you like to compete in: timed race, rail jam, air jam, pipe, or all?');
	  	if(competitions === 'all') {
	  		competitions = ['timed race', 'rail jam', 'air jam', 'pipe'];
	  	} else {
	  		competitions = competitions.split(',');
	  	};
	  	console.log(competitions);
	  	var helmet = confirm('A Brain Bucket is required to compete.');
	  	contestant = new Snowbum(name, sport, competitions, helmet);
	  	correct = confirm('Are these details correct? Name: ' + contestant.name + ', ' + contestant.sport + ', Events: ' + contestant.competitions);
	  	if(correct) {
	  		alert('Cool! Good luck ' + name + '!');
	  		return contestant;
	  	} else {
	  		alert('Alright let\'s try this again...');
	  		register();
	  	};
	  } else {
		alert('Enjoy the competition, ' + name + ' but you can\'t win if you don\'t compete!');
	  };
	};
//3rd interact with lifty
	function interact() {
		ready = confirm('Ready to head up to the competitions?')
		if(ready) {
		alert('Sup I\'m the lifty Rosie!\n\n' + getLiftyResponse());
		} else {
		alert('Get warmed up and get your gear on, let\'s go!');
		interact();
		};
	};
//game loop
	  var contestant1Points = 0;
	  var contestant2Points = 0;
	  var contestant3Points = 0;
	function startCompetition() {
	  var warmedUp = alert('Events are beginning, find your place!');
	  if(compete === 'yes') {
		for(var i = 0, len = competitions.length; i < len; i++) {
			console.log('We are in the for loop.');
		  	alert('Ready, set, go!');
		  	var event = competitions[i];
		  	var score = 0;
		  	switch(event) {
		  		case 'timed race': 
		  		  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('You won the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant3Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  		case 'rail jam':
			  	  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('You won the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant3Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
			    case 'air jam':
			  	  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('You won the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant3Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
			    case 'pipe':
			  	  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('You won the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  	contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('You lost the ' + event + '. Better luck in the next event')
		  		  	contestant3Points += Math.floor((Math.random()*20)+5);
		  		  	contestant2Points += Math.floor((Math.random()*5) +1);
		  		  	contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  	};
		};
	  } else if(compete === 'no') {
			for(var i = 0, len = specEvents.length; i < len; i++) {
		  	alert('Ready, set, go!');
		  	var event = specEvents[i];
		  	var score = 0;
		  	switch(event) {
		  		case 'timed race': 
		  		  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('Contestant 1 takes the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('Contestant 2 takes the ' + event + ' event!')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('Contestant 3 takes the ' + event + ' event!')
		  		  	ontestant3Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  		case 'rail jam':
		  		  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('Contestant 1 takes the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('Contestant 2 takes the ' + event + ' event!')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('Contestant 3 takes the ' + event + ' event!')
		  		  	ontestant3Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  		case 'air jam':
		  		  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('Contestant 1 takes the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('Contestant 2 takes the ' + event + ' event!')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('Contestant 3 takes the ' + event + ' event!')
		  		  	ontestant3Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  		case 'pipe':
		  		  score = Math.floor((Math.random()*3) + 1);
		  		  if(score === 1) {
		  		  	alert('Contestant 1 takes the ' + event + ' event!')
		  		  	contestant1Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else if(score === 2) {
		  		  	alert('Contestant 2 takes the ' + event + ' event!')
		  		  	contestant2Points += Math.floor((Math.random()*20)+5);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
	  		  		contestant3Points += Math.floor((Math.random()*5) +1);
		  		  } else {
		  		  	alert('Contestant 3 takes the ' + event + ' event!')
		  		  	ontestant3Points += Math.floor((Math.random()*20)+5);
	  		  		contestant2Points += Math.floor((Math.random()*5) +1);
	  		  		contestant1Points += Math.floor((Math.random()*5) +1);
		  		  };
		  		  break;
		  	};
			};
		};
	};
//};
