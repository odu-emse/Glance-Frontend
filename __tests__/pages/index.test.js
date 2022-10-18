import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/index';

describe('Index', () => {
	beforeEach(() => {
		render(<Index />);
	})
	it('renders the index page', () => {
		expect(screen.getByTestId('splash-logo')).toBeInTheDocument();
		expect(screen.getByTestId('index-head')).toBeInTheDocument();
	});
});