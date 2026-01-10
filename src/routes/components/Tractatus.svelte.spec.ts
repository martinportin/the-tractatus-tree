import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Tractatus from './Tractatus.svelte';
import { page } from 'vitest/browser';

describe('tractatus component', () => {
	interface Proposition {
		number: string;
		statement: string;
		propositions?: Proposition[];
	}

	const heading = 'heading';

	test('should display header', () => {
		const propositions: Proposition[] = [
			{
				number: '1',
				statement: 'text one'
			}
		];
		render(Tractatus, { heading, propositions });

		const header = page.getByRole('heading', { name: /heading/i });
		expect(header).toBeInTheDocument();
	});

	test('should display a statement', () => {
		const propositions: Proposition[] = [
			{
				number: '1',
				statement: 'text one'
			}
		];

		render(Tractatus, { heading, propositions });

		const number = page.getByText(/1/i);
		expect(number).toBeInTheDocument();

		const text = page.getByText(/text one/i);
		expect(text).toBeInTheDocument();
	});

	test('should display two statements', () => {
		const propositions: Proposition[] = [
			{ number: '1', statement: 'text one' },
			{ number: '2', statement: 'text two' }
		];

		render(Tractatus, { heading, propositions });

		const numberOne = page.getByText(/1/i);
		expect(numberOne).toBeInTheDocument();

		const textOne = page.getByText(/text one/i);
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		expect(numberTwo).toBeInTheDocument();

		const textTwo = page.getByText(/text two/i);
		expect(textTwo).toBeInTheDocument();
	});

	test('should render two propositions, first one with a subproposition', () => {
		const propositions: Proposition[] = [
			{
				number: '1',
				statement: 'text one',
				propositions: [{ number: '3', statement: 'text three' }]
			},
			{ number: '2', statement: 'text two' }
		];

		render(Tractatus, { heading, propositions });

		const numberOne = page.getByText(/1/i);
		expect(numberOne).toBeInTheDocument();

		const textOne = page.getByText(/text one/i);
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		expect(numberTwo).toBeInTheDocument();

		const textTwo = page.getByText(/text two/i);
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		expect(numberThree).toBeInTheDocument();

		const textThree = page.getByText(/text three/i);
		expect(textThree).toBeInTheDocument();
	});

	test('should display two propositions with subpropositions', () => {
		const propositions: Proposition[] = [
			{
				number: '1',
				statement: 'text one',
				propositions: [{ number: '3', statement: 'text three' }]
			},
			{
				number: '2',
				statement: 'text two',
				propositions: [{ number: '4', statement: 'text four' }]
			}
		];

		render(Tractatus, { heading, propositions });

		const numberOne = page.getByText(/1/i);
		expect(numberOne).toBeInTheDocument();

		const textOne = page.getByText(/text one/i);
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		expect(numberTwo).toBeInTheDocument();

		const textTwo = page.getByText(/text two/i);
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		expect(numberThree).toBeInTheDocument();

		const textThree = page.getByText(/text three/i);
		expect(textThree).toBeInTheDocument();

		const numberFour = page.getByText(/4/i);
		expect(numberFour).toBeInTheDocument();

		const textFour = page.getByText(/text four/i);
		expect(textFour).toBeInTheDocument();
	});

	test('should display two propositions, the second one with a subproposition with a subproposition', () => {
		const propositions: Proposition[] = [
			{
				number: '1',
				statement: 'text one'
			},
			{
				number: '2',
				statement: 'text two',
				propositions: [
					{ number: '3', statement: 'text three' },
					{ number: '4', statement: 'text four' }
				]
			}
		];

		render(Tractatus, { heading, propositions });

		const numberOne = page.getByText(/1/i);
		expect(numberOne).toBeInTheDocument();

		const textOne = page.getByText(/text one/i);
		expect(textOne).toBeInTheDocument();

		const numberTwo = page.getByText(/2/i);
		expect(numberTwo).toBeInTheDocument();

		const textTwo = page.getByText(/text two/i);
		expect(textTwo).toBeInTheDocument();

		const numberThree = page.getByText(/3/i);
		expect(numberThree).toBeInTheDocument();

		const textThree = page.getByText(/text three/i);
		expect(textThree).toBeInTheDocument();

		const numberFour = page.getByText(/4/i);
		expect(numberFour).toBeInTheDocument();

		const textFour = page.getByText(/text four/i);
		expect(textFour).toBeInTheDocument();
	});
});
