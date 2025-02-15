<script lang="ts">
	import Wheel from '$lib/components/Wheel.svelte';
	import { openModal } from '$lib/utils';
</script>

<div class="flex flex-col items-center">
	<Wheel on:stop={(e) => openModal('winnerModal', { winner: e.detail.winner })} />
</div>
