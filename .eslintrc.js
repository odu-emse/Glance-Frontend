module.exports = {
	plugins: [
		"unicorn"
	],
  extends: [
	'next',
	'next/core-web-vitals',
    'semistandard',
	'prettier'
  ],
  "rules": {
	"unicorn/filename-case": [
		"error",
		{
			"case": "snakeCase"
		}
	]
  }
};
