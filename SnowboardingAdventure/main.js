//alert('Welcome to Rose Mountain');
$(document).ready(function(){
  //newGame();
 	$(document).on('click', '.button', function(){
		checkIn();
		$(this).text('Next');
		$(this).attr('class', 'register');
	});
	$(document).on('click', '.register', function(){
		register();
		$(this).text('Let\'s shred!');
		$(this).attr('class', 'interact');
	});
	$(document).on('click', '.interact', function(){
		interact();
		$(this).text('Events');
		$(this).attr('class', 'startCompetition');
	});
	$(document).on('click', '.startCompetition', function(){
		startCompetition();
		$(this).text('Bronze');
		$(this).attr('class', 'thirdPlace');
	});
	$(document).on('click', '.thirdPlace', function(){
		//Announce third place
		getResults(contestant1Points, contestant2Points, contestant3Points, 'bronze', contestant);
		$(this).text('Silver');
		$(this).attr('class', 'secondPlace');
	});
	$(document).on('click', '.secondPlace', function(){
		//Announce second place
		getResults(contestant1Points, contestant2Points, contestant3Points, 'silver', contestant);
		$(this).text('Gold');
		$(this).attr('class', 'firstPlace');
	});
	$(document).on('click', '.firstPlace', function(){
		//Announce first place
		getResults(contestant1Points, contestant2Points, contestant3Points, 'gold', contestant);
		$(this).text('Reregister');
		$(this).attr('class', 'button');
	});
});