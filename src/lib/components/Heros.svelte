<script lang="ts">
	import ContactForm from "./ContactForm.svelte";


</script>

<div class="w-full variant-filled-primary relative" >
    <div class="container mx-auto flex flex-row px-20 gap-20">
        <div class="w-1/2 flex flex-row justify-center items-center ">
            <span class="text-6xl text-center text-secondary-500 font-bold">AU SERVICE DE L'IMMOBILIER DEPUIS 23 ANS</span>
        </div>
        <div class="p-8 w-1/2">
            <div class="bg-white/50 rounded-3xl relative z-40">
                <ContactForm/>
            </div>
        </div>
    </div>
    <img class="absolute bottom-0 right-0 z-30" src="HouseWhite.png" alt="hero">
</div>
