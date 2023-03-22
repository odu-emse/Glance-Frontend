module.exports = {
	plugins: ['unicorn', 'cypress'],
	env: {
		'cypress/globals': true,
	},
	extends: ['next', 'next/core-web-vitals', 'semistandard', 'prettier'],
	rules: {
		'unicorn/filename-case': [
			'error',
			{
				case: 'snakeCase',
			},
		],
		'no-empty-pattern': 'off',
		'no-use-before-define': 'off',
		'react-hooks/rules-of-hooks': 'warn',
		'react/jsx-no-comment-textnodes': 'warn',
		'react/no-children-prop': 'warn',
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/assertion-before-screenshot': 'warn',
		'cypress/no-force': 'warn',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error',
	},
}
