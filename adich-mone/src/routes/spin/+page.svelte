<script lang="ts">
	import Wheel from '$lib/components/Wheel.svelte';
	import { openModal } from '$lib/utils';
</script>

<div class="flex flex-col items-center bg-red-50 pt-56">
	<Wheel on:stop={(e) => openModal('winner-modal', { winner: e.detail.winner })} />
</div>
