import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ExpandButton from './ExpandButton.svelte';
import { page, userEvent } from 'vitest/browser';

describe('expand button', () => {
	test('should display button', () => {
		render(ExpandButton);

		const button = page.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('should change button name from Expand to Collapse on click', async () => {
		render(ExpandButton);

		const expandButton = page.getByRole('button', { name: 'Expand' });
		const collapseButton = page.getByRole('button', { name: 'Collapse' });
		expect(expandButton).toBeInTheDocument();
		expect(collapseButton).not.toBeInTheDocument();

		await userEvent.click(expandButton);
		expect(expandButton).not.toBeInTheDocument();
		expect(collapseButton).toBeInTheDocument();
	});

	test('should toggle button name on click', async () => {
		render(ExpandButton);

		const expandButton = page.getByRole('button', { name: 'Expand' });
		const collapseButton = page.getByRole('button', { name: 'Collapse' });
		expect(expandButton).toBeInTheDocument();
		expect(collapseButton).not.toBeInTheDocument();

		await userEvent.click(expandButton);
		expect(expandButton).not.toBeInTheDocument();
		expect(collapseButton).toBeInTheDocument();

		await userEvent.click(collapseButton);
		expect(expandButton).toBeInTheDocument();
		expect(collapseButton).not.toBeInTheDocument();
	});
});
