<script lang="ts">
	import image1 from '$lib/images/image1.png';
	import image2 from '$lib/images/image2.png';
	import image3 from '$lib/images/image3.png';
	import image4 from '$lib/images/image4.png';
	import image5 from '$lib/images/image5.png';
	import image6 from '$lib/images/image6.jpg';
	import { modalStore } from '$lib/stores/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { get } from 'svelte/store';
	import { defaultEntries } from '$lib/utils/Wheel';
	const items = {
		[defaultEntries[0].id]: { imageSrc: image1, message: "Awwwww! You don't have a love life" },
		[defaultEntries[1].id]: { imageSrc: image2, message: 'Love is in the air!' },
		[defaultEntries[2].id]: { imageSrc: image3, message: 'You deserve happiness!' },
		[defaultEntries[3].id]: { imageSrc: image4, message: 'Love is in the air!' },
		[defaultEntries[4].id]: { imageSrc: image5, message: 'You deserve happiness!' },
		[defaultEntries[5].id]: { imageSrc: image6, message: 'Awwwww! You dont have a love life' }
	};
	const { winner } = get(modalStore)[0].meta as {
		winner: { id: string };
	};
</script>

<div class="my-8 w-full rounded-xl bg-red-400 py-8">
	<div class="flex flex-col">
		<img src={items[winner.id].imageSrc} alt="" class="p-3" />
		<span class="font px-2">{items[winner.id].message}</span>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');
	.font {
		font-family: 'Love Ya Like A Sister', cursive;
		font-size: 24px;
	}
</style>
