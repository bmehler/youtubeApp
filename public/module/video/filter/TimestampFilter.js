angular
  .module('video.timestamp.filter', [ ] )
  .filter('TimestampFilter', TimestampFilter);

function TimestampFilter () {
  return function (item) {
	if (item.length < 6) {
		var splits = item.split(/(\d+\w{1})/);
		var cleanup = splits.filter(function (e) {
			return e;
		});
		cleanup.shift();
		var regex1 = new RegExp(/\d{1}(?=[M])/);
		var regex2 = new RegExp(/\d{1}(?=[S])/);
		var regex3 = new RegExp(/\d{1}(?=[H])/);
		var duration = cleanup.map(function (item) {
			if (regex1.test(item)) {
				var a = item.replace(/M/, '');
				if (a.length < 2) {
					return '00:0' + a + ':00';
				} else {
					return '00:' + a + ':00';
				}
			}
			if (regex2.test(item)) {
				var b = item.replace(/S/, '');
				if (b.length < 2) {
					return '00:0' + b;
				} else {
					return '00:' + b;
				}
			}
			if (regex3.test(item)) {
				var c = item.replace(/H/, '');
				if (c.length < 2) {
					return '0' + c + ':00:00';
				} else {
					return c + ':00:00';
				}
			}
      return duration.toString();
		});
	} else {
		var tstamp = item.match(/(\d+)(?=[MHS])/ig) || [];
		var without = tstamp.map(function (item) {
			if (item.length < 2) { return '0' + item; }
			 return item;
		}).join(':');
  	return without.toString();
	}
	};
}
