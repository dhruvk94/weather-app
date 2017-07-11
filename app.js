const request = require('request');
const yargs = require('yargs');
var geocode = require('./geocode/geocode');
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
geocode.geocodeAddress(argv.address,(errorMsg, response) => {
	if(errorMsg){
		console.log(errorMsg);
	}
	else{
		console.log(JSON.stringify(response,undefined,2));
	}
});	
	
