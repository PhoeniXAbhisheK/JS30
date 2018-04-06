const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cityArray = [];
// let cityArray = [];

const searchBox = document.querySelector('.search');
const resultBox = document.querySelector('.suggestions');

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cityArray.push(...data));
	// can use below LOC to put the data into cityArray, but cityArray then needs to be changed from const to let/var 
	// .then(data => cityArray = data);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatch(searchKey, cityArray){
	return cityArray.filter(place => {
		const regex = new RegExp(searchKey, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches(){
	const resultArray = findMatch(this.value, cityArray);
	const resultHtml = resultArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityReplace = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
		const stateReplace = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

		return `
			<li>
				<span class="name">${cityReplace}, ${stateReplace}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('');
	
	resultBox.innerHTML = resultHtml;
}

searchBox.addEventListener('keyup', displayMatches);