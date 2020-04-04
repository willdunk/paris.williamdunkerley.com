module.exports = {
	collectCoverageFrom: [
		'src/components/**/*.{js}',
	],
	moduleDirectories: ['node_modules', 'src'],
	verbose: true,
	testRegex: '__test__/.*\\.test\\.js$',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ["<rootDir>/__test__/setupJest.js"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js",
		"\\.(css|less)$": "identity-obj-proxy"
	}
}