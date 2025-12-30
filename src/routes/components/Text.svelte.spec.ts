import { describe, test, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Text from './Text.svelte';
import { page } from 'vitest/browser';

describe('text component', () => {
	const texts = ['text one', 'text two', 'text three', 'text 4', ''];
	const regexp = [/text one/i, /text two/i, /text three/i, /text 4/i, /^$/];

	for (const [index, value] of texts.entries()) {
		test(`should display ${value}`, () => {
			render(Text, { text: value });

			const text = page.getByText(regexp[index]);
			expect(text).toBeInTheDocument();
		});
	}
});
