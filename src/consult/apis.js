fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "a67912df2cmsh5cd5b705f73535bp10ca73jsn183ce33dfa52"
	}
})

.then(response => {
	response.json().then(data => {
		let info = data.map(function(title){
			return title.substr(0,(title.length)-1).replace("/title/", "");
			
		})
		console.log(JSON.stringify(info));
	})
})
.catch(err => {
	console.error(err);
});


/*console.log("-----------------------------------------------------------------------");

fetch("https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt0944947&currentCountry=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "a67912df2cmsh5cd5b705f73535bp10ca73jsn183ce33dfa52"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/