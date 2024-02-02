<script lang="ts">
    import Icon from '@iconify/svelte';

    let type_biens = [
        "Maison",
        "Appartement",
        "Terrain",
        "Local commercial",
        "Immeuble",
        "Autre"
    ]

    let projects = [
        "Achat",
        "Vente",
        "Location",
        "Autre"
    ]

let firstname = "";
let lastname = "";
let email = "";
let phone = "";
let type_bien = "Maison";
let project = "Achat";
let numero = "0642424242";
</script>


<div class="flex flex-col gap-8 p-8 items-center">
    <span class="text-5xl text-secondary-500 font-mulish font-bold self-start ml-8">Nous contacter</span>
    <span class="text-md text-secondary-500 self-start">Nisi amet in esse proident ad dolor eiusmod excepteur irure aute et in ut sunt.</span>
    <div class="flex-row flex gap-6 w-full">
        <input type="text" placeholder="Nom" class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={lastname} required>
        <input type="text" placeholder="Prénom" class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={firstname} required>
    </div>
    <div class="flex-row flex gap-6 w-full">
        <input type="email" placeholder="email" class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={email} required>
        <input type="tel" placeholder="numéro" class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={phone} required>
    </div>
    <div class="flex-row flex gap-6 w-full">
    <select class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={type_bien} required>
        {#each type_biens as type}
            <option >{type}</option>
        {/each}
        
    </select>
    <select class="placeholder:text-slate-500 p-2 w-1/2 h-10 border-[1px] border-secondary-500" bind:value={project} required>
        {#each projects as project}
            <option >{project}</option>
        {/each}
    
    </select>

    </div>
    <button class="btn variant-filled-secondary flex flex-row gap-2">
        <Icon class="w-6 h-8" icon="entypo:email" />
        Envoyer
    </button>
    <div class="flex flex-row gap-8 w-full items-center px-20">
        <div class="h-[2px] bg-secondary-500/50 rounded-md w-full" />
        <h2 class="text-2xl font-bold text-secondary-500">OU</h2>
        <div class="h-[2px] bg-secondary-500/50 rounded-md w-full" />
    </div>
    <button class="btn variant-filled-secondary flex flex-row gap-2">
        <Icon class="w-6 h-8" icon="entypo:phone" />
        <a href={"tel:" + numero} > {numero}</a>
    </button>
</div>