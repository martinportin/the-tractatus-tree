<script lang="ts">
	import ExpandButton from './ExpandButton.svelte';
	import Number from './Number.svelte';
	import Self from './Proposition.svelte';
	import Statement from './Statement.svelte';

	interface Proposition {
		number: string;
		statement: string;
		propositions?: Proposition[];
	}

	interface Props {
		proposition: Proposition;
		isVisible?: boolean;
	}

	const { proposition, isVisible = true }: Props = $props();

	let isExpanded: boolean = $state(false);

	function handleExpansion(): void {
		isExpanded = !isExpanded;
	}
</script>

<div class={isVisible ? 'visible' : 'nonVisible'}>
	<Number number={proposition.number} />
	<Statement statement={proposition.statement} />

	{#if proposition.propositions}
		<ExpandButton {isExpanded} handleClick={handleExpansion} />
	{/if}

	{#each proposition.propositions as subProposition (subProposition.number)}
		<Self proposition={subProposition} isVisible={isExpanded} />
	{/each}
</div>

<style>
	.visible {
		display: block;
	}

	.nonVisible {
		display: none;
	}
</style>
