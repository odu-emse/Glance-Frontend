module.exports = {
	plugins: ['unicorn'],
	extends: ['next', 'next/core-web-vitals', 'semistandard', 'prettier'],
	rules: {
		'unicorn/filename-case': [
			'error',
			{
				case: 'snakeCase',
			},
		],
		'no-empty-pattern': 'off',
		'no-use-before-define': 'off'
	},
}
