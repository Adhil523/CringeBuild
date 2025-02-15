<script lang="ts">
	import image1 from '$lib/images/image1.png';
	import image2 from '$lib/images/image2.png';
	import image3 from '$lib/images/image3.png';
	import image4 from '$lib/images/image4.png';
	import image5 from '$lib/images/image5.png';
	import image6 from '$lib/images/image6.jpg';
	import love from '$lib/images/valentines-day.png';
	import { modalStore } from '$lib/stores/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { get } from 'svelte/store';
	import { defaultEntries } from '$lib/utils/Wheel';
	const items = {
		[defaultEntries[0].id]: { imageSrc: image1, message: 'Feb 30 inu set aavum bro' },
		[defaultEntries[1].id]: { imageSrc: image2, message: 'Paaya madakkiko, yogam illa' },
		[defaultEntries[2].id]: {
			imageSrc: image3,
			message: 'Oroonninum athintethaaya smaayam und dhaasa'
		},
		[defaultEntries[3].id]: { imageSrc: image4, message: 'Love is in the air!' },
		[defaultEntries[4].id]: { imageSrc: image5, message: 'Thalararuth raamankutty thalararuth!' },
		[defaultEntries[5].id]: { imageSrc: image6, message: 'Adich Moneee' }
	};
	const { winner } = get(modalStore)[0].meta as {
		winner: { id: string };
	};
</script>

<div class="my-8 h-96 w-96 rounded-xl bg-red-300 py-8">
	<div class="flex flex-col items-center">
		<img
			src={items[winner.id] ? items[winner.id].imageSrc : Object.values(items)[0].imageSrc}
			alt=""
			class="p-3"
		/>
		<span class="font px-2 text-center text-xs"
			>{items[winner.id] ? items[winner.id].message : Object.values(items)[0].message}</span
		>
		<img src={love} alt="" class="size-24" />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	.font {
		font-family: 'Poppins', serif;
		font-size: 20px;
	}
</style>
