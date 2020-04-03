module.exports = {
	collectCoverageFrom: [
		'src/components/**/*.{js}',
	],
	moduleDirectories: ['node_modules', 'src'],
	verbose: true,
	testRegex: '__test__/.*\\.test\\.js$',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ["<rootDir>/__test__/setupJest.js"],
	transform: {
		"^.+\\.js$": "babel-jest"
	}
}