import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Proposition from './Proposition.svelte';
import { page } from 'vitest/browser';

describe('proposition component', () => {
	test('should display "1" and "text one"', () => {
		render(Proposition, { number: '1', text: 'text one' });

		const number = page.getByText(/1/i);
		const text = page.getByText(/text one/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});

	test('should display "2" and "text two"', () => {
		render(Proposition, { number: '2', text: 'text two' });

		const number = page.getByText(/2/i);
		const text = page.getByText(/text two/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});

	test('should display "3" and "text three"', () => {
		render(Proposition, { number: '3', text: 'text three' });

		const number = page.getByText(/3/i);
		const text = page.getByText(/text three/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});
});
