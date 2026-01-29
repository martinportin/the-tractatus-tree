<script lang="ts">
	interface Props {
		isAllExpanded: boolean;
		handleClick: () => void;
	}

	let { isAllExpanded, handleClick }: Props = $props();
</script>

<div>
	<button onclick={handleClick}>{isAllExpanded ? 'Collapse All' : 'Expand All'}</button>
</div>

<style></style>
