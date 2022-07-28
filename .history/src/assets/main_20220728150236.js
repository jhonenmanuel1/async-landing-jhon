const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UC9CoOnJkIBMdeijd9qYoT_g&part=snippet%2Cid&order=date&maxResults=12';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1b3d51d20msh28261218312955dp1dc285jsnf02a5f860452',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));