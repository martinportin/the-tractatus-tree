<script lang="ts">
	interface Props {
		statement: string;
	}

	const { statement }: Props = $props();
</script>

<div>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p>{@html statement}</p>
</div>

<style></style>
