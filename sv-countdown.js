// load namespace
SV = window.SV || {};

SV.Countdown = function(selector, params) {

	var formatTime = function(time) {
		if (time < 10)
			return '0' + time;

		return time;
	};

	var setTimer = function() {
		var oneSec  = 1000;     // milliseconds
		var oneMin  = 60000;    // oneSec x 60
		var oneHour = 3600000;  // oneMin x 60
		var oneDay  = 86400000; // oneHour x 24

		var now = new Date();
		var timeLeftTotal = targetDate.getTime() - now.getTime();

		var timeLeftDays = timeLeftTotal % oneDay;
		daysLeft = ( timeLeftTotal - timeLeftDays ) / oneDay;

		var timeLeftHours = timeLeftDays % oneHour;
		hoursLeft = ( timeLeftDays - timeLeftHours ) / oneHour;

		var timeLeftMins = timeLeftHours % oneMin;
		minsLeft = ( timeLeftHours - timeLeftMins ) / oneMin;

		var timeLeftSecs = timeLeftMins % oneSec;
		secsLeft = ( timeLeftMins - timeLeftSecs ) / oneSec;
	};

	var updateTime = function() {
		setTimer();

		if (daysLeft <= 0 && hoursLeft <= 0 && minsLeft <= 0 && secsLeft <= 0) {
			wrapper.innerHTML = '<p class="svcd-blastoff">' + options.endMessage + '</p>';
			var div = document.querySelector('.grid-item-last');
			div.style.display = "none";
		} else {
			wrapper.querySelector('.svcd-days').innerText = daysLeft;
			wrapper.querySelector('.svcd-hours').innerText = formatTime(hoursLeft);
			wrapper.querySelector('.svcd-mins').innerText = formatTime(minsLeft);
			wrapper.querySelector('.svcd-secs').innerText = formatTime(secsLeft);

			setTimeout(updateTime, 1000);
		}
	};

	var defaults = {
		year: 2000,
		month: 1,
		day: 1,
		untilMessage: '',
		endMessage: '',
		tableClass: ''
	};

	var options = {};
	for (var k in defaults) {
		options[k] = params[k] || defaults[k];
	}

	var wrapper = document.querySelector(selector);
	if (!wrapper)
		return;

	var targetDate = new Date(options.year, options.month - 1, options.day);
	var daysLeft, hoursLeft, minsLeft, secsLeft;

	var useTableClass = 'svcd-timer';
	if (options.tableClass.length > 0)
		useTableClass += ' ' + options.tableClass;

	var tableHtml =
		'<table class="' + useTableClass + '">' +
		'<thead>' +
			'<tr>' +
				'<th>Napok</th>' +
				'<th>Orák</th>' +
				'<th>Percek</th>' +
				'<th>Másodpercek</th>' +
			'</tr>' +
			'</thead>' +
			'<tbody>' +
			'<tr>' +
				'<td class="svcd-days"></td>' +
				'<td class="svcd-hours"></td>' +
				'<td class="svcd-mins"></td>' +
				'<td class="svcd-secs"></td>' +
			'</tr>' +
		'</tbody>' +
		'</table>';

	if (options.untilMessage.length > 0)
		tableHtml += '<p class="svcd-until">' + options.untilMessage + '</p>';

	wrapper.innerHTML = tableHtml;
	updateTime();
};
