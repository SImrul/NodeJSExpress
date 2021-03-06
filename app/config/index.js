var config = {
	local: {
		mode: 'local',
		port: 3000
	},
	staging: {
		mode: 'staging',
		port: 4000
	},
	production: {
		mode: 'production',
		port: 5000
	},
	postgres: {
		host: '127.0.0.1',
		port: '5432',
		username: 'postgres',
		password: '1'
	}
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}
