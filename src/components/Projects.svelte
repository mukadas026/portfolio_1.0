<script lang="ts">
	import Card from "./Card.svelte"
	import Heading from "./Heading.svelte"

	import { cards } from "../data/cardsDetails"
</script>

<section class="mt-32 pb-32 w-full max-w-[1920px] mx-auto">
	<Heading text="Projects" />
	{#each cards as { title, description, image, link } (link)}
		<Card
			{title}
			{description}
			{image}
			{link}
		/>
	{/each}
</section>
