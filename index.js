const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '6d8755d9',
			s      : searchTerm
		}
	});
	console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;

const onInput = (event) => {
	setTimeout(() => {
		fetchData(event.target.value);
	}, 1000);
};

input.addEventListener('input', onInput);
