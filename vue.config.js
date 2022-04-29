function getIndexEntry() {
	if (process.env.NODE_ENV === 'production-test') {
		return 'main-production-test.js';
	}
	return process.env.NODE_ENV === 'production' ? 'main-production.js' : 'main.js';
}
module.exports = {
	chainWebpack: (config) => {
		if (process.env.NODE_ENV === 'test') {
			const scssRule = config.module.rule('scss');
			scssRule.uses.clear();
			scssRule
				.use('null-loader')
				.loader('null-loader');
		}
	},
	css: {
		extract: false
	},
	pages: {
		index: {
			entry: 'src/' + getIndexEntry(),
		}
	}
}