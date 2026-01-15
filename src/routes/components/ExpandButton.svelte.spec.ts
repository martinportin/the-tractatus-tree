import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ExpandButton from './ExpandButton.svelte';
import { page, userEvent } from 'vitest/browser';

describe('expand button', () => {
	test('should display button', () => {
		const isExpanded = $state(false);
		const handleClick = vi.fn();

		render(ExpandButton, { isExpanded, handleClick });

		const button = page.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('should call function prop on click', async () => {
		const isExpanded = $state(false);
		const handleClick = vi.fn();

		render(ExpandButton, { isExpanded, handleClick });

		const expandButton = page.getByRole('button', { name: /expand/i });
		await userEvent.click(expandButton);
		expect(handleClick).toHaveBeenCalled();
	});
});
