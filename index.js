var request = require('request');
var $ = require('cheerio');
var fs = require('fs');

var min = 207344;
var max = 208347;

function getPysakki(num)
{
	request(
	{
		url: 'http://info.jyvaskylanliikenne.fi/?lcn=' + num + '&v=monitor',
		method: 'GET',
		callback: function(error, response, body)
		{
			var address = $(body).find('body > div.main_container > div.result_box > div:nth-child(1)').text();
			console.log(num + ':' + address);
			
			// tiedosto kirjoitus
			// fs.appendFileSync("pysakit", '\n'+num + ':' + address); 
			
			// min++;
			
			// rekursio, poista for loop
			// if(min <= max) getPysakki(min);
		}
	});
}

for(var i = min; i <= max; i++)
{
	getPysakki(i);
}