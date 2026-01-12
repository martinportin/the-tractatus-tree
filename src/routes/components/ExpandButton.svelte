<script lang="ts">
	export const expandButtonState = $state({ isPressed: false });

	function handleClick() {
		expandButtonState.isPressed = !expandButtonState.isPressed;
	}
</script>

<div>
	<button onclick={handleClick}>{expandButtonState.isPressed ? 'Collapse' : 'Expand'}</button>
</div>

<style></style>
