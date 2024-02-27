<script>
    import rates from '$lib/shared/stores/rates';
    
    export let data;

    data.latest && rates.set(data.latest);

    let firstName = "Jacob";
    let lastName = "Flake";

    let reservationCount = 0;
    let cancellationCount = 0;
    
    let cancellationArray = [];
    $: cancellationArray;

    function calculate() {
        reservationCount = 0;
        cancellationCount = 0;

        let dataArray = [...data.data.data.bookings.nodes];

        //console.log(data.data.data.bookings.nodes);

        //dataArray.push(data.data.data.bookings.nodes);

        //for (let i = 0; i < data.data.data.bookings.nodes.length; i++) {
        //    dataArray.push(data.data.data.bookings.notes[i]);
        //}

        console.log(dataArray);

        for (let i = 0; i < dataArray.length; i++) {
            console.log(JSON.stringify(dataArray[i]))
            if (JSON.stringify(dataArray[i]) == '{}') {

            } else if (dataArray[i].student.firstName == firstName && dataArray[i].student.lastName == lastName){
                reservationCount++;
                if (dataArray[i].cancellation != null) {
                    cancellationCount++;
                    cancellationArray.push(dataArray[i].cancellation.title);
                }
            }
        }
    }
    
</script>


<h1>Homepage: This page is mainly used for testing purposes</h1>
<p><a href="">Cancellation Dashboard</a></p>
<button on:click={ calculate }>Log Data</button>

<h1>Student name</h1>
<input type="text">

<p>Total Reservations: { reservationCount }</p>
<p>Total Cancellations: { cancellationCount }</p>

{#each cancellationArray as cancellationTitle}
    <p>Cancellation Reason: { cancellationTitle }</p>
{/each}

