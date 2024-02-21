<script lang="ts">
let firstname = "";
let lastname = "";
let email = "";
let phone = "";
let comment = "";
</script>


<div class="flex flex-col h-[500px] w-1/2 mx-20">
    <h2 class="text-white text-3xl">Contact us</h2>
    <div class="flex flex-col items-center h-full w-full">
        <div class="flex flex-col items-center flex-row justify-around h-full w-full">
            <div class="flex w-full">
                <div class="flex flex-col w-full mr-10">
                    <span class="text-base">Name</span>
                    <input type="text" class="w-full max-h-[50px] h-[40px] min-h-[30px] rounded" bind:value={lastname} required>
                </div>
                <div class="flex flex-col w-full">
                    <span>First Name</span>
                    <input type="text" class="w-full max-h-[50px] h-[40px] min-h-[30px] rounded" bind:value={firstname} required>
                </div>
            </div>
            <div class="flex w-full">
                <div class="flex flex-col w-full mr-10">
                    <span>Phone</span>
                    <input type="text" class="w-full max-h-[50px] h-[40px] min-h-[30px] rounded" bind:value={phone} required>
                </div>
                <div class="flex flex-col w-full">
                    <span>Mail</span>
                    <input type="text" class="w-full max-h-[50px] h-[40px] min-h-[30px] rounded" bind:value={email} required>
                </div>
            </div> 
            <div class="flex w-full">
                <div class="flex flex-col w-full">
                    <span>Comment</span>
                    <input type="text" class="w-full max-h-[150px] h-[140px] min-h-[130px] rounded" bind:value={comment} required>
                </div>
            </div>
        </div>
    </div>
    <button class="btn variant-filled-secondary w-full bg-blue-ocean rounded">send it</button>
</div>