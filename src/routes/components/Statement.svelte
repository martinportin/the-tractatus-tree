<script lang="ts">
	interface Props {
		statement: string;
	}

	let { statement }: Props = $props();
</script>

<div>
	<p>{statement}</p>
</div>

<style></style>
