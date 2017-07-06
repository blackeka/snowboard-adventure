function getResults(contestant1Points, contestant2Points, contestant3Points, medal, contestant) {
	var contestant1;
	if(contestant) {
		contestant1 = contestant.name;
	} else {
		contestant1 = 'Contestant 1';
	};
	var gold = {};
	var silver = {};
	var bronze = {};
	if(contestant1Points > contestant2Points && contestant1Points > contestant3Points) {
		gold.winner = contestant1; 
		gold.points = contestant1Points;
		if(contestant2Points > contestant3Points) {
			silver.winner = 'Contestant 2';
			silver.points = contestant2Points;
			bronze.winner = 'Contestant 3';
			bronze.points = contestant3Points;
		} else if(contestant3Points > contestant2Points) {
			silver.winner = 'Contestant 3';
			silver.points = contestant3Points
			bronze.winner = 'Contestant 2';
			bronze.points = contestant2Points;
		} else {
			silver.winner = 'Tie between contestant 2 & 3';
			silver.points = contestant2Points;
			bronze = silver;
		}
	} else if(contestant2Points > contestant1Points && contestant2Points > contestant3Points) {
		gold.winner = 'Contestant 2'; 
		gold.points = contestant2Points;
		if(contestant1Points > contestant3Points) {
			silver.winner = contestant1;
			silver.points = contestant1Points;
			bronze.winner = 'Contestant 3';
			bronze.points = contestant3Points;
		} else if(contestant3Points > contestant1Points) {
			silver.winner = 'Contestant 3';
			silver.points = contestant3Points;
			bronze.winner = contestant1;
			bronze.points = contestant1Points;
		} else {
			silver.winner = 'Tie between ' + contestant1 + ' and contestant 3';
			silver.points = contestant1Points
			bronze = silver;
		}
	} else if(contestant3Points > contestant2Points && contestant3Points > contestant1Points) {
		gold.winner = 'Contestant 3'; 
		gold.points = contestant3Points;
		if(contestant1Points > contestant2Points) {
			silver.winner = contestant1;
			silver.points = contestant1Points;
			bronze.winner = 'Contestant 2';
			bronze.points = contestant2Points;
		} else if(contestant2Points > contestant1Points) {
			silver.winner = 'Contestant 2';
			silver.points = contestant2Points;
			bronze.winner = contestant1;
			bronze.points = contestant1Points;
			silver = 'Contestant 2';
			bronze = contestant1;
		} else {
			silver.winner = 'Tie between ' +contestant1 + ' and contestant 2';
			silver.points = contestant2Points;
			bronze = silver;
		}
	} else {
		gold.winner = 'Looks like we have a 3-way tie...'
		gold.points = contestant1Points;
		silver = gold;
		bronze = gold;
	}

	if(medal === 'gold') {
		return alert(gold.winner + ' takes the gold with a total of ' + gold.points + ' for first place!');
	} else if (medal === 'silver') {
		return alert(silver.winner + ' takes the silver with a total of ' + silver.points + ' for second place!');
	} else if(medal === 'bronze') {
		return alert(bronze.winner + ' takes the bronze with a total of ' + bronze.points + ' for third place!');
	}
}