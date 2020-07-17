module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	rules: {
		"no-console": 0,
		"no-useless-escape": 0,
		"no-multiple-empty-lines": [
			2,
			{
				max: 3,
			},
		],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "crlf",
				printWidth: 200,
				tabWidth: 2,
				useTabs: true,
				singleQuote: false,
				bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
				jsxBracketSameLine: false, //  在jsx中把'>' 是否单独放一行
			},
		],
	},
	plugins: [],
	extends: ["plugin:vue/essential", "plugin:prettier/recommended", "eslint:recommended"],
	parserOptions: {
		parser: "babel-eslint",
	},
};

// "husky": {
//     "hooks": {
//       "pre-commit": "yarn run precommit-msg && lint-staged"
//     }
//   },
