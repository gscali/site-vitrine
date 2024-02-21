<script lang="ts">
	import ContactForm from "./ContactForm.svelte";


</script>

<div class="w-full bg-white relative" >
    <div class="container mx-auto flex flex-row px-20 gap-20 items-center">
        <div class="w-1/2 flex flex-row justify-center items-center ">
            <img class="h-[568px] w-[515px] object-cover" src="Rectangle 3.png" alt="hero">
        </div>
        <div class="p-8 w-1/2">
            <div class="bg-white/50 rounded-3xl relative z-40">
                <ContactForm/>
            </div>
        </div>
    </div>
</div>
