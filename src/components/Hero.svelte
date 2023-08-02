<script>
	import Navbar from "./Navbar.svelte"
	import me1 from "../assets/me1.jpg"
	import me4 from "../assets/me4.jpg"
	import me3 from "../assets/me3.jpg"

	const slide = [me1, me4, me3]

	import Carousel from "svelte-carousel"
    // import CustomDot from 'svelte-carousel'
	let carousel
</script>

<header class="relative">
	<Navbar />
	<div class="absolute w-full top-0 left-0">
		<div class="max-w-[1920px] w-full h-screen max-h-[1080px] overflow-hidden mx-auto">
            <div>
                <p>Hey there, 👋</p>
            </div>
			<Carousel
				autoplay
				infinite
				autoplayDuration={2000}
				pauseOnFocus
				arrows={false}
				bind:this={carousel}
                let:currentPageIndex
                let:pagesCount
                let:showPage
			>
				{#each slide as img (img)}
					<img
						src={img}
						alt="Mukadas Maltiti"
						class="w-full h-full aspect-video object-center "
					/>
				{/each}
                <div slot="dots" class="absolute bottom-4 w-20 mx-auto flex justify-around">
                    <!-- {#each Array(slide.length) as _, pageIndex (pageIndex)}
                        <div class={`w-4 h-4 rounded-full ${currentPageIndex === pageIndex ? 'bg-sec' : 'bg-gray-400'}`} on:click={() => showPage(pageIndex)}></div>
                    {/each} -->
                        {#each Array(slide.length) as _, i (i)}
                            <div class="w-3 h-3 rounded-full bg-sec"></div>
                        {/each}
                </div>
			</Carousel>
			<!-- <div class={`bg-[url('${me1}')]`}></div> -->
		</div>
	</div>
</header>
