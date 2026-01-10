<script lang="ts">
	import Proposition from './Proposition.svelte';

	interface Proposition {
		number: string;
		statement: string;
		propositions?: Proposition[];
	}

	interface Props {
		heading: string;
		propositions: Proposition[];
	}

	const { heading, propositions }: Props = $props();
</script>

<h1>{heading}</h1>

{#each propositions as proposition (proposition.number)}
	<Proposition {proposition} />
{/each}

<style></style>
