<script lang="ts">
	import Button from "./Button.svelte"
    import landingPage from '../assets/Product Landing Page.png'

    export let title:string
    export let image:string
    export let description:string
    export let link:string
</script>

<div class="w-4/5 md:w-3/5 lg:1/2 xl:w-2/5 mx-auto mt-8 space-y-4 text-white ">
    <h3 class="text-2xl md:text-4xl font-medium  text-center">{title}</h3>
	<img
		src={image}
		alt="img"
        class="rounded-lg"
	/>
	<p class="text-xs md:text-sm text-justify w-11/12 mx-auto">
		{description}
	</p>
	<Button
		{link}
		text="Go To Site"
	/>
</div>
