<script lang="ts">
	import { modalRegistry } from '$lib/modals';
	import '../app.css';
	let { children } = $props();

	import { Modal } from '@skeletonlabs/skeleton';
</script>

<Modal components={modalRegistry} />
{@render children()}
