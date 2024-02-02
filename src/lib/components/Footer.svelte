<script lang="ts">
	import Icon from "@iconify/svelte";

    let numero = "0642424242";

</script>
<div class="h-20 bg-secondary-500 ">
    <div class="grid grid-cols-2 max-w-5xl m-auto h-full">
        <div class="flex text-white gap-2 items-center justify-center">
            <Icon icon="gg:pin"/>
            <div class="flex flex-col items-center ">
                <span>135 avenue sainte marguerite</span>
                <span>Le castel Provencal</span>
            </div>
        </div>
        <div class="flex text-white gap-2 items-center justify-center">
            <Icon icon="entypo:phone"/>
            <a href={"tel:" + numero} > {numero}</a>
        </div>
    </div>
</div>



<!-- <span class=" text-white ">Copyright © {new Date().getFullYear()}</span>
    <span class="text-white "> Gabriel Scalisi.</span> -->