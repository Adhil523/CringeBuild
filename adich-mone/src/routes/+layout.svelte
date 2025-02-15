<script lang="ts">
	import { modalRegistry } from '$lib/modals';
	import { setSkeletonStores } from '$lib/stores/skeleton';
	import '../app.css';
	let { children } = $props();

	import { getModalStore, getToastStore, initializeStores, Modal } from '@skeletonlabs/skeleton';

	initializeStores();
	setSkeletonStores(getModalStore(), getToastStore());
</script>

<Modal components={modalRegistry} />
<div class="h-screen w-full bg-red-50">
	{@render children()}
</div>
