<script>
    import rates from '$lib/shared/stores/rates';
    
    export let data;

    data.latest && rates.set(data.latest);

    let firstName = "First Name";
    let lastName = "Last Name";

    $: firstName;
    $: lastName;

    let reservationCount = 0;
    let cancellationCount = 0;
    
    let cancellationArray = [];
    //console.log(data);

    let dataArray = [...data.dataArray];
    console.log(dataArray);

    function calculate() {
        reservationCount = 0;
        cancellationCount = 0;

        for (let i = 0; i < dataArray.length; i++) {
            //console.log(dataArray[i]);
            if (JSON.stringify(dataArray[i]) != '{}') {
                if (firstName == dataArray[i].student.firstName && lastName == dataArray[i].student.lastName) {
                    reservationCount++;

                    if (dataArray[i].cancellation != null) {
                        cancellationCount++;
                        cancellationArray.push({
                            title: dataArray[i].cancellation.title,
                            date: dataArray[i].startsAt,
                            instructor: dataArray[i].instructor.firstName + " " + dataArray[i].instructor.lastName
                        });
                    }
                }
            }
            
        }

        cancellationArray = cancellationArray;
    }
    
</script>


<h1>Cancellation Dashboard Testing</h1>
<h1>Student name</h1>
<input type="text" bind:value={firstName}>
<input type="text" bind:value={lastName}>


<button on:click={ calculate }>Log Data</button>
<p>Total Reservations: { reservationCount }</p>
<p>Total Cancellations: { cancellationCount }</p>

{#each cancellationArray as cancellationTitle}
    <p>Cancellation Reason: { cancellationTitle }</p>
{/each}

