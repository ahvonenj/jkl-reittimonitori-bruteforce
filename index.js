var request = require('request');
var $ = require('cheerio');

var min = 207344;
var min2 = 200000;
var max = 207747;
var max2 = 300000;

for(var i = min2; i < max2; i++)
{
	(function(i)
	{
		request(
		{
			url: 'http://info.jyvaskylanliikenne.fi/?lcn=' + i + '&v=monitor',
			method: 'GET',
			callback: function(error, response, body)
			{
				var address = $(body).find('body > div.main_container > div.result_box > div:nth-child(1)').text();
				console.log(i + ':' + address);
			}
		});
	})(i);
}
