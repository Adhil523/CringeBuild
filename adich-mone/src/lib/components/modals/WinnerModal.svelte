<script lang="ts">
	import image1 from '$lib/images/image1.png';
	import image2 from '$lib/images/image2.png';
	import image3 from '$lib/images/image3.png';
	import image4 from '$lib/images/image4.png';
	import image5 from '$lib/images/image5.png';
	import image6 from '$lib/images/image6.jpg';

	const items = [
		{ imageSrc: image1, message: "Awwwww! You don't have a love life" },
		{ imageSrc: image2, message: 'Love is in the air!' },
		{ imageSrc: image3, message: 'You deserve happiness!' },
		{ imageSrc: image4, message: 'Love is in the air!' },
		{ imageSrc: image5, message: 'You deserve happiness!' },
		{ imageSrc: image6, message: 'Awwwww! You dont have a love life' }
	];
</script>

<div class="my-8 w-full rounded-xl bg-red-400 py-8">
	{#each items as item}
		<div class="flex flex-col">
			<img src={item.imageSrc} alt="" class="p-3" />
			<span class="font px-2">{item.message}</span>
		</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

	.font {
		font-family: 'Love Ya Like A Sister', cursive;
		font-size: 24px;
	}
</style>
