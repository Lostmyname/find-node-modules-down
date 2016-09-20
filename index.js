var glob = require('glob');
var _ = require('lodash');
var path = require('path');

module.exports = function(base) {
  base = base || '.';
	return _.chain(glob.sync(path.join(base, '**/node_modules/**'), {}))
		.filter(function (path) {
			return /node_modules$/.test(path);
		})
		.value();
};


