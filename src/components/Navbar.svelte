<script lang="ts">
	import logo from "../assets/temp_logo_white_png.png"
	import Icon from "@iconify/svelte"
	import { absoluteRef } from "../stores"

	let changeColor = false
	let scrollValue = 0
	window.addEventListener('scroll', e => {
		const rect = $absoluteRef.getBoundingClientRect()
		if(rect.top < -80){
			changeColor = true
		}else{
			changeColor = false
		}
		scrollValue = -1 * rect.top > 100 ? 100 : -1 * rect.top
	})
</script>

<nav class={`w-full h-20 sticky top-0  z-20 bg-sec/${scrollValue} ${changeColor ? "" : ""}`}>
	<div class="max-w-[1920px] mx-auto h-full flex items-center justify-between px-4 ">
		<div class="w-12 ">
			<img
				src={logo}
				alt=""
				class=""
			/>
		</div>
		<div class="fixed md:relative md:w-3/5 bottom-0 bg-sec/50 md:bg-transparent text-white w-screen left-0 flex items-center justify-around h-14">
			<a href="#home" class="hover:text-sec transition-all duration-500"><span class="hidden md:block">Home</span><Icon icon="ic:round-home" class="md:hidden text-2xl"/></a>
			<a href="#projects" class="hover:text-sec transition-all duration-500"><span class="hidden md:block">Projects</span><Icon icon="ant-design:project-filled" class="md:hidden text-2xl"/></a>
			<a href="#techStack" class="hover:text-sec transition-all duration-500"><span class="hidden md:block">Stack</span><Icon icon="basil:stack-solid" class="md:hidden text-2xl"/></a>
			<a href="#events" class="hover:text-sec transition-all duration-500"><span class="hidden md:block">Events</span><Icon icon="mdi:events-check" class="md:hidden text-2xl"/></a>
			<a href="#interests" class="hover:text-sec transition-all duration-500"><span class="hidden md:block">Interests</span><Icon icon="ic:round-interests" class="md:hidden text-2xl"/></a>
		</div>
		<!-- <div on:click={showMenu} on:keyup={() => {}} aria-roledescription="clickable" class="md:hidden">
			<Icon
				icon="mingcute:menu-fill"
				class="text-white text-3xl hover:cursor-pointer"
			/>
		</div> -->
	</div>
</nav>
