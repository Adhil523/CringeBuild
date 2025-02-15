<script lang="ts">
	import Wheel from '$lib/components/Wheel.svelte';
	import { launchConfetti } from '$lib/utils/ConfettiLauncher';
	import type { OnStoppedData } from '$lib/utils/Wheel';

	// const modalStore = getModalStore()

	// const createWinnerModal = (data: OnStoppedData): ModalSettings => ({
	//   type: 'component',
	//   component: 'winnerDialog',
	//   title: wheelStore.config.winnerMessage || 'We have a winner!',
	//   body: data.winner.text,
	//   meta: data
	// })

	// const openWinnerModal = async (e: CustomEvent<OnStoppedData>) => {
	//   launchConfetti(wheelStore.config.confetti, $state.snapshot(wheelStore.config.colors))
	//   if (!wheelStore.config.displayWinnerDialog) return
	//   modalStore.trigger(createWinnerModal(e.detail))
	// }

	// let WheelComponent = $state(Wheel);
</script>

<div class="flex flex-col items-center">
	<Wheel on:stop={(e) => console.log(e)} />
</div>
