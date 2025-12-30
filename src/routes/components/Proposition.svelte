<script lang="ts">
	interface Props {
		number: string;
		text: string;
	}

	const { number, text }: Props = $props();
</script>

<p>{number}</p>
<p>{text}</p>

<style></style>
