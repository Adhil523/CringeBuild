<script lang="ts">
	import { goto } from '$app/navigation';
	import image from '$lib/images/bouquet.png';
	import { openModal } from '$lib/utils';

	// openModal('winner-modal', {
	// 	winner: {
	// 		id: 'ckqjw'
	// 	}
	// });
</script>

<div class="flex h-screen w-full bg-red-50">
	<div class="mx-auto flex flex-col items-center gap-2 py-32">
		<img src={image} class="size-64 sm:size-44" alt="" />
		<div class="flex flex-col gap-x-4 gap-y-4 px-6">
			<span class="font">Adichu Mone!</span>
			<span class="text-xl font-light opacity-90 sm:text-lg"
				>Single & Ready to mingle? Exclusively for all your single & testing your luck buddies. Spin
				it & test it!</span
			>
			<button
				class="rounded-md bg-red-500 px-8 py-3 text-white"
				on:click={async () => await goto('/spin')}>Spin it now</button
			>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

	.font {
		font-family: 'Love Ya Like A Sister', cursive;
		font-size: 52px;
	}
</style>
