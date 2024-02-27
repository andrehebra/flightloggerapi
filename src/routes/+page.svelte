<script>
    import rates from '$lib/shared/stores/rates';
    
    export let data;

    data.latest && rates.set(data.latest);

    console.log(rates[2]);
</script>


<h1>Homepage: This page is mainly used for testing purposes</h1>
<p><a href="https://kit.svelte.dev">Cancellation Dashboard</a></p>

<ul>hi
{#each $rates as { startsAt, endsAt }}
    <li>hello</li>
{/each}
</ul>