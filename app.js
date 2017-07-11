const request = require('request');
const yargs = require('yargs');

//encodeURIComponent('');
//decodeURIComponent('');

const argv = yargs
	.options({
		a: {
			demand : true,
			alias : 'address',
			describle : 'Address to fetch weather for',
			string : true
		}
	})
	.help()
	.alias('help','h')
	.argv;
	
//console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
//Google geolocation apis
request({
url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json : true
},(error, response, body) => {
//	console.log(JSON.stringify(body, undefined, 2));
	if(error){
		console.log('Unable to connect to Google servers.');
	}
	else if(body.status === 'ZERO_RESULTS'){
		console.log('Unable to find address.');
	}
	else if(body.status === 'OK'){
		console.log(`Formatted Address : ${body.results[0].formatted_address}`);
		console.log(`Latitude : `+body.results[0].geometry.location.lat);
		console.log(`Longitude : `+body.results[0].geometry.location.lng);
	}
	
	//	console.log(response);
});
