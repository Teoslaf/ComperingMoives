const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '6d8755d9',
			s      : 'avengers'
		}
	});
	console.log(response.data);
};
fetchData();
