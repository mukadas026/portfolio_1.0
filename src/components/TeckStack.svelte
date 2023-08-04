<script>
	import Heading from "./Heading.svelte"
    import { techStack } from "../data/techStack";

</script>
<section id="techStack" class="w-full max-w-[1920px] mx-auto pb-20">
    <Heading text="Teck Stack"/>

    <div class="mt-12 w-4/5 lg:w-3/5 xl:w-1/2 mx-auto flex flex-wrap items-center justify-around">
        {#each techStack as {image, link, title} (link)}
            <a href={link} target="_blank" class="">
                <img src={image} alt={title} title={title} class="w-8 md:w-12 lg:w-16">
            </a>
        {/each}
    </div>
</section>