<script lang="ts">
	import Tractatus from './components/Tractatus.svelte';

	interface Proposition {
		number: string;
		statement: string;
		propositions?: Proposition[];
	}

	interface Content {
		propositions: Proposition[];
	}

	interface Data {
		title: string;
		content: Content;
	}

	interface Props {
		data: Data;
	}

	const { data }: Props = $props();
</script>

<Tractatus heading={data.title} propositions={data.content.propositions} />

<style></style>
