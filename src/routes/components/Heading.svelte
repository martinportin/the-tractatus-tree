<script lang="ts">
	interface Props {
		text: string;
	}

	const { text }: Props = $props();
</script>

<h1>{text}</h1>

<style></style>
