<script lang="ts">
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
	}

	const { proposition }: Props = $props();
</script>

<div>
	<Number number={proposition.number} />
	<Statement statement={proposition.statement} />

	{#each proposition.propositions as subProposition (subProposition.number)}
		<Self proposition={subProposition} />
	{/each}
</div>

<style></style>
