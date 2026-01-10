import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Heading from './Heading.svelte';
import { page } from 'vitest/browser';

describe('heading component', () => {
	test('should display a h1', () => {
		render(Heading, { text: 'heading 1' });

		const heading = page.getByRole('heading', { level: 1, name: /heading 1/i });
		expect(heading).toBeInTheDocument();
	});

	test('should display a h1', () => {
		render(Heading, { text: 'heading 2' });

		const heading = page.getByRole('heading', { level: 1, name: /heading 2/i });
		expect(heading).toBeInTheDocument();
	});
});
