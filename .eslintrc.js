module.exports = {
	plugins: ['unicorn', 'jest'],
	env: {
		'jest/globals': true,
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
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
	},
}
