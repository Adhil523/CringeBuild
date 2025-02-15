<script lang="ts">
	import { RadioGroup, RadioItem, getModalStore } from '@skeletonlabs/skeleton';
	import Wheel from '$lib/components/Wheel.svelte';
	import WheelMultiThread from '$lib/components/WheelMultiThread.svelte';
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

<div class="flex min-h-screen flex-col">
	<main class="flex flex-grow grid-cols-4 flex-col xl:grid">
		<div class="col-span-1 flex flex-col justify-between p-4 pb-0 xl:pb-4 xl:pr-0">
			<div>
				<!-- <RadioGroup>
					<RadioItem name="wheel" value={Wheel} bind:group={WheelComponent}>
						Single Thread
					</RadioItem>
					<RadioItem name="wheel" value={WheelMultiThread} bind:group={WheelComponent}>
						Multi Thread
					</RadioItem>
				</RadioGroup> -->
				<Wheel on:stop={(e) => console.log(e)} />
			</div>
		</div>

		<!-- <div class="col-span-2 flex-1 flex flex-col justify-center items-center">
        <WheelComponent
          on:stop={openWinnerModal}
        />
      </div> -->
	</main>
</div>
