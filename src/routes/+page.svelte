<script>
    import rates from '$lib/shared/stores/rates';
    
    export let data;

    data.latest && rates.set(data.latest);

    //console.log(rates);

    function calculate() {
        console.log(data);
        let parsed = JSON.parse(data);
        console.log(parsed);

        let dataArray = [];
        
        for (let i in data) {
            dataArray.push([i, data [i]]);
        }

        console.log(dataArray);
        console.log(dataArray[0][1]);
    }
    
</script>


<h1>Homepage: This page is mainly used for testing purposes</h1>
<p><a href="https://kit.svelte.dev">Cancellation Dashboard</a></p>
<button on:click={ calculate }>Log Data</button>

<h1>Student name</h1>
<input type="text">



{JSON.stringify(data)}
