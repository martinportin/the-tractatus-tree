import { page } from 'vitest/browser';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	const data = {
		title: 'Tractatus logico-philosophicus',
		author: 'Ludvig Wittgenstein',
		translator: 'C.K. Odgen',
		releaseDate: 'October 22, 2010',
		source: 'https://www.gutenberg.org/files/5740/5740-pdf.pdf',
		content: {
			propositions: [
				{
					number: '1',
					statement: 'The world is everything that is the case.*'
				}
			]
		}
	};

	test('should display header', async () => {
		render(Page, { data });

		const heading = page.getByRole('heading', {
			level: 1,
			name: /tractatus logico-philosophicus/i
		});
		await expect.element(heading).toBeInTheDocument();
	});

	test('should display a proposition', () => {
		render(Page, { data });

		const number = page.getByText(/1/i);
		expect(number).toBeInTheDocument();

		const statement = page.getByText(/the world is everything that is the case.*/i);
		expect(statement).toBeInTheDocument();
	});
});
