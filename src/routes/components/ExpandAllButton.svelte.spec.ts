import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ExpandAllButton from './ExpandAllButton.svelte';
import { page, userEvent } from 'vitest/browser';

describe('expand all button', () => {
	test('should display button', () => {
		const handleClick = vi.fn();
		const isAllExpanded = false;
		render(ExpandAllButton, { isAllExpanded, handleClick });

		const button = page.getByRole('button');

		expect(button).toBeInTheDocument();
	});

	test('should display button with text "Expand All" when "isAllExpanded" is false', () => {
		const isAllExpanded = false;
		const handleClick = vi.fn();
		render(ExpandAllButton, { isAllExpanded, handleClick });

		const button = page.getByRole('button', { name: /expand all/i });

		expect(button).toBeInTheDocument();
	});

	test('should display button with text "Collapse All" when "isAllExpanded" is true', () => {
		const isAllExpanded = true;
		const handleClick = vi.fn();
		render(ExpandAllButton, { isAllExpanded, handleClick });

		const button = page.getByRole('button', { name: /collapse all/i });

		expect(button).toBeInTheDocument();
	});

	test('should call function prop when pressed', async () => {
		const handleClick = vi.fn();
		const isAllExpanded = false;
		render(ExpandAllButton, { isAllExpanded, handleClick });

		const button = page.getByRole('button', { name: /expand all/i });

		await userEvent.click(button);

		expect(handleClick).toHaveBeenCalled();
	});
});
