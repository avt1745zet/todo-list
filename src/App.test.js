import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
	render(<App />);
	const headerElement = screen.getByRole('banner');
	expect(headerElement).toBeInTheDocument();
});

test('renders main', () => {
	render(<App />);
	const mainElement = screen.getByRole('main');
	expect(mainElement).toBeInTheDocument();
});

test('renders footer', () => {
	render(<App />);
	const footerElement = screen.getByRole('contentinfo');
	expect(footerElement).toBeInTheDocument();
});
