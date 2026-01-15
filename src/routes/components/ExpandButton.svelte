<script lang="ts">
	interface Props {
		isExpanded: boolean;
		handleClick: () => void;
	}
	let { isExpanded, handleClick }: Props = $props();
</script>

<div>
	<button onclick={handleClick}>{isExpanded ? 'Collapse' : 'Expand'}</button>
</div>

<style></style>
