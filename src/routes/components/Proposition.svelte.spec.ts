import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Proposition from './Proposition.svelte';
import { page } from 'vitest/browser';

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
});
