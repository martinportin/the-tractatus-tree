import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Proposition from './Proposition.svelte';
import { page, userEvent } from 'vitest/browser';

describe('proposition component', () => {
	test('should display "1" and "text one"', () => {
		const proposition = { number: '1', statement: 'text one' };
		render(Proposition, { proposition });

		const number = page.getByText(/1/i);
		const text = page.getByText(/text one/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		const textTwo = page.getByText(/text two/i);

		expect(numberTwo).not.toBeInTheDocument();
		expect(textTwo).not.toBeInTheDocument();
	});

	test('should display "2" and "text two"', () => {
		const proposition = { number: '2', statement: 'text two' };
		render(Proposition, { proposition });

		const number = page.getByText(/2/i);
		const text = page.getByText(/text two/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		const textThree = page.getByText(/text three/i);

		expect(numberThree).not.toBeInTheDocument();
		expect(textThree).not.toBeInTheDocument();
	});

	test('should display "3" and "text three"', () => {
		const proposition = { number: '3', statement: 'text three' };
		render(Proposition, { proposition });

		const number = page.getByText(/3/i);
		const text = page.getByText(/text three/i);

		expect(number).toBeInTheDocument();
		expect(text).toBeInTheDocument();

		const numberFour = page.getByText(/4/i);
		const textFour = page.getByText(/text four/i);

		expect(numberFour).not.toBeInTheDocument();
		expect(textFour).not.toBeInTheDocument();
	});

	test('should render proposition with a subproposition', () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [{ number: '2', statement: 'text two' }]
		};
		render(Proposition, { proposition });

		const numberOne = page.getByText(/1/i);
		const textOne = page.getByText(/text one/i);

		expect(numberOne).toBeInTheDocument();
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		const textTwo = page.getByText(/text two/i);

		expect(numberTwo).toBeInTheDocument();
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		const texThree = page.getByText(/text three/i);

		expect(numberThree).not.toBeInTheDocument();
		expect(texThree).not.toBeInTheDocument();
	});

	test('should render proposition with a subproposition with a subproposition', () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [
				{
					number: '2',
					statement: 'text two',
					propositions: [{ number: '3', statement: 'text three' }]
				}
			]
		};
		render(Proposition, { proposition });

		const numberOne = page.getByText(/1/i);
		const textOne = page.getByText(/text one/i);

		expect(numberOne).toBeInTheDocument();
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		const textTwo = page.getByText(/text two/i);

		expect(numberTwo).toBeInTheDocument();
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		const textThree = page.getByText(/text three/i);

		expect(numberThree).toBeInTheDocument();
		expect(textThree).toBeInTheDocument();

		const numberFour = page.getByText(/4/i);
		const textFour = page.getByText(/text four/i);

		expect(numberFour).not.toBeInTheDocument();
		expect(textFour).not.toBeInTheDocument();
	});

	test('should render a proposition with two subpropositions', () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [
				{ number: '2', statement: 'text two' },
				{ number: '3', statement: 'text three' }
			]
		};
		render(Proposition, { proposition });

		const numberOne = page.getByText(/1/i);
		const textOne = page.getByText(/text one/i);

		expect(numberOne).toBeInTheDocument();
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		const textTwo = page.getByText(/text two/i);

		expect(numberTwo).toBeInTheDocument();
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		const textThree = page.getByText(/text three/i);

		expect(numberThree).toBeInTheDocument();
		expect(textThree).toBeInTheDocument();

		const numberFour = page.getByText(/4/i);
		const textFour = page.getByText(/text four/i);

		expect(numberFour).not.toBeInTheDocument();
		expect(textFour).not.toBeInTheDocument();
	});

	test('should contain expand button', () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [{ number: '2', statement: 'text two' }]
		};

		render(Proposition, { proposition });

		const expandButton = page.getByRole('button', { name: 'Expand' });
		expect(expandButton).toBeInTheDocument();
	});

	test('should expand when pressing the expand button', async () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [{ number: '2', statement: 'text two' }]
		};

		render(Proposition, { proposition, isVisible: true });

		const subpropositionNumber = page.getByText(/2/i);
		const subpropositionText = page.getByText(/text two/i);

		expect(subpropositionNumber).not.toBeVisible();
		expect(subpropositionText).not.toBeVisible();

		const expandButton = page.getByRole('button', { name: /expand/i });

		await userEvent.click(expandButton);

		expect(subpropositionNumber).toBeVisible();
		expect(subpropositionText).toBeVisible();
	});

	test('should toggle the subproposition visibility when pressing the expand/collapse button', async () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [{ number: '2', statement: 'text two' }]
		};

		render(Proposition, { proposition });

		const subpropositionNumber = page.getByText(/2/i);
		const subpropositionText = page.getByText(/text two/i);

		expect(subpropositionNumber).not.toBeVisible();
		expect(subpropositionText).not.toBeVisible();

		const expandButton = page.getByRole('button', { name: /expand/i });

		await userEvent.click(expandButton);

		expect(subpropositionNumber).toBeVisible();
		expect(subpropositionText).toBeVisible();

		const collapseButton = page.getByRole('button', { name: /collapse/i });

		await userEvent.click(collapseButton);

		expect(subpropositionNumber).not.toBeVisible();
		expect(subpropositionText).not.toBeVisible();
	});

	test('should collapse subproposition if proposition is collapsed', async () => {
		const proposition = {
			number: '1',
			statement: 'text one',
			propositions: [
				{
					number: '2',
					statement: 'text two',
					propositions: [{ number: '3', statement: 'text three' }]
				}
			]
		};

		render(Proposition, { proposition });

		const expandPropositionButton = page.getByRole('button', { name: /Expand/i });

		await userEvent.click(expandPropositionButton);

		const subpropositionNumber = page.getByText(/2/i);
		const subpropositionText = page.getByText(/text two/i);
		const expandSubPropositionButton = page.getByRole('button', { name: /Expand/i }).last();

		expect(subpropositionNumber).toBeVisible();
		expect(subpropositionText).toBeVisible();

		const subSubPropositionNumber = page.getByText(/3/i);
		const subSubPropositionText = page.getByText(/text three/i);

		expect(subSubPropositionNumber).not.toBeVisible();
		expect(subSubPropositionText).not.toBeVisible();

		await userEvent.click(expandSubPropositionButton);

		expect(subSubPropositionNumber).toBeVisible();
		expect(subSubPropositionText).toBeVisible();

		const collapsePropositionButton = page.getByRole('button', { name: /collapse/i }).first();

		await userEvent.click(collapsePropositionButton);

		expect(subpropositionNumber).not.toBeVisible();
		expect(subpropositionText).not.toBeVisible();

		expect(subSubPropositionNumber).not.toBeVisible();
		expect(subSubPropositionText).not.toBeVisible();

		await userEvent.click(expandPropositionButton);

		expect(subpropositionNumber).toBeVisible();
		expect(subpropositionText).toBeVisible();

		expect(subSubPropositionNumber).not.toBeVisible();
		expect(subSubPropositionText).not.toBeVisible();
	});
});
