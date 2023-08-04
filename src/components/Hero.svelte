<script lang="ts">
	import {onMount} from 'svelte'
	import Navbar from "./Navbar.svelte"
	import me1 from "../assets/me1.jpg"
	import me4 from "../assets/me4.jpg"
	import me3 from "../assets/me3.jpg"

	const slide = [me1, me4, me3]

	import Carousel from "svelte-carousel"
	import { absoluteRef } from '../stores'
	// import CustomDot from 'svelte-carousel'
	let carousel

	let textArr: String[] = ["The name's Mukadas Maltiti", "a Web developer", "a YouTuber", "a Geek"]

	let typer: String = ""

	// setInterval(() => {

	// }, 1000)
	let i:number = 0
	let j:number = 0
	const typewriter = () => {
		if(i < textArr.length){
			if(j < textArr[i].length){
				typer += textArr[i][j]
				j++
			}else{
				if(typer !== ''){
					typer = typer.slice(0, typer.length - 1)
				}else{
					i++
					j = 0
				}
			}
		}else{
			i = 0
			j = 0
		}
		if(typer.length < textArr[i]?.length){
			setTimeout(typewriter, 100)
		}else{
			setTimeout(typewriter, 1000)
		}
	}
	typewriter()
	// let absoluteRef: HTMLDivElement | undefined
	let height:number
	
	onMount(() => {
		height = $absoluteRef.clientHeight

		window.addEventListener('resize', (e) => {
			height = $absoluteRef.clientHeight
		})
	})
</script>

<header id="home" class={`relative -top-20`} style={`height:${height}px ;`}>
	<!-- <Navbar /> -->
	<div class="absolute w-full top-0 left-0">
		<div class="relative max-w-[1920px] w-full h-96 md:h-fit xl:h-screen md:max-h-[1080px] overflow-hidden mx-auto" bind:this={$absoluteRef}>
			<div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 md:space-y-16">
				<p class=" w-screen text-center text-white text-5xl md:text-[5rem] font-black md:font-bold">
					Hey there, <span class="inline-block animate-wave origin-bottom">👋</span>
				</p>
				<p class="h-[1ch] w-screen text-center text-white text-2xl md:text-6xl lg:text-[5rem] font-bold md:font-medium" ><span class="border-r-2 md:border-r-4 border-red-500 pr-2">{typer}</span></p>
			</div>
			<p class="absolute z-10 left-1/2 bottom-10 -translate-x-1/2 text-2xl pt-2 animate-bounce" on:click={() => console.log('hello world')}>👇</p>
			<Carousel
				autoplay
				infinite
				autoplayDuration={5000}
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
						class="w-full h-96 md:h-auto aspect-auto object-cover object-center"
					/>
				{/each}
				<div
					slot="dots"
					class="absolute bottom-2 md:bottom-3 lg:bottom-4 w-20 mx-auto flex justify-around"
				>
					<!-- {#each Array(slide.length) as _, pageIndex (pageIndex)}
                        <div class={`w-4 h-4 rounded-full ${currentPageIndex === pageIndex ? 'bg-sec' : 'bg-gray-400'}`} on:click={() => showPage(pageIndex)}></div>
                    {/each} -->
					{#each Array(slide.length) as _, i (i)}
						<div class="w-3 h-3 rounded-full bg-sec" />
					{/each}
				</div>
			</Carousel>
			<!-- <div class={`bg-[url('${me1}')]`}></div> -->
		</div>
	</div>
</header>
