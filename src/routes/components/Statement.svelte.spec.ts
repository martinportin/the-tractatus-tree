import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Statement from './Statement.svelte';
import { page } from 'vitest/browser';

describe('text component', () => {
	const statements = ['text one', 'text two', 'text three', 'text 4', ''];
	const regexps = [/text one/i, /text two/i, /text three/i, /text 4/i, /^$/];

	for (const [index, value] of statements.entries()) {
		test(`should display ${value}`, () => {
			render(Statement, { statement: value });

			const text = page.getByText(regexps[index]);
			expect(text).toBeInTheDocument();
		});
	}
});
