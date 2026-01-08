<script lang="ts">
	import Proposition from './Proposition.svelte';

	interface Proposition {
		number: string;
		statement: string;
		propositions?: Proposition[];
	}
	interface Props {
		propositions: Proposition[];
	}

	const { propositions }: Props = $props();
</script>

<h1>Tractatus logico-philosophicus</h1>

{#each propositions as proposition (proposition.number)}
	<Proposition {proposition} />
{/each}

<style></style>
