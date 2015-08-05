/*
 * NOAA Weather Radio Outages
 * Copyright 2015 teamWeather and Christopher Zenzel
 * All Rights Reserved
 */

$(document).ready(function() {
	if ($('.nwr_outages_table')) { nwr_radio_outages('.nwr_outages_table'); }
});

function nwr_radio_outages(targetElement) {
	/*
	 * Establish NOAA Weather Radio Outage Links
	 * and jQuery Proxy Links
	 *
	 * teamWeather Proxy Note - This proxy only works on teamWeather domains. Use
	 * any-origin from GH project on your own server to prevent load issues.
	 */
	var nwr_outages_link = 'http://www.nws.noaa.gov/nwr/outages/outages.php';
	var jq_proxy_link = 'https://cors-anywhere.herokuapp.com';

	/*
	 * Enable CORS
	 */
	$.support.cors = true;

	/*
	 * Create a request
	 */
	$.ajax({
		url: jq_proxy_link + '/' + nwr_outages_link,
		type: 'GET',
		success: function(data) {
			data = nwr_filter_data(data);
			var outage_table = $(data).find(".status").first();
			outage_table.find("tr").each(function(index) {
				if (index > 0) {
					var state = $(this).find("td:eq(0)").text();
					var transmitter = $(this).find("td:eq(1)").text();
					var callsign = $(this).find("td:eq(2)").text();
					var frequency = $(this).find("td:eq(3)").text();
					var wfo = $(this).find("td:eq(4)").text();
					var problem = $(this).find("td:eq(5)").text();

					var issueRow = '<tr><td class="nwr_header">' + state + '</td><td>' + transmitter + ', ' + state + '</td><td>' + frequency + ' mhz</td><td>' + problem + '</td></tr>';
					$(targetElement + ' .nwr_outages_body').append(issueRow);
				}
			});
			$(targetElement + ' .nwr_outages_ajax').attr('style', 'display:none;');
		},
		error: function() {
			$(targetElement + ' .nwr_outages_ajax').html('Unable to load outages at this time...');
		}
	});
}

function nwr_filter_data(data){
	data = data.replace(/src\=[\"|\'][^>]*[\"|\']/ig, '');
	data = data.replace(/<?\/body[^>]*>/ig,'');
	data = data.replace(/[\r|\n]+/ig,'');
	data = data.replace(/<--[\S\s]*?-->/ig,'');
	data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/ig,'');
	data = data.replace(/<script.*[^>]*>[\S\s]*?<\/script>/ig,'');
	data = data.replace(/<script.*\/>/ig,'');
	return data;
}
