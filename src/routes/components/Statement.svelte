<script lang="ts">
	interface Props {
		statement: string;
	}

	const { statement }: Props = $props();
</script>

<div>
	<p>{@html statement}</p>
</div>

<style></style>
