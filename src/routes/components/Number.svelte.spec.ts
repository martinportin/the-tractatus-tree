import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Number from './Number.svelte';
import { page } from 'vitest/browser';

describe('number component', () => {
	const numbers = ['1', '2', '3', '1.1', '2.5', '3.14', '4.3245'];
	const regexp = [/1/i, /2/i, /3/i, /1.1/i, /2.5/i, /3.14/i, /4.3245/i];

	for (const [index, value] of numbers.entries()) {
		test(`should display ${value}`, () => {
			render(Number, { number: value });

			const number = page.getByText(regexp[index]);
			expect(number).toBeInTheDocument();
		});
	}
});
