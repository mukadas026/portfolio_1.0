<script lang="ts">
    export let text:string
    export let link:string
</script>
<a href={link} target="_blank" class="block w-fit bg-sec px-4 py-2 rounded mx-auto hover:bg-sec/60 font-semibold transition-all duration-300">{text}</a>