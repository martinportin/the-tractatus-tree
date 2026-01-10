<script lang="ts">
	import Heading from './Heading.svelte';
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

<Heading text={heading} />

{#each propositions as proposition (proposition.number)}
	<Proposition {proposition} />
{/each}

<style></style>
