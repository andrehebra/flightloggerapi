<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Label, Input, Button } from 'flowbite-svelte';




    import rates from '$lib/shared/stores/rates';
    export let data;

    data.latest && rates.set(data.latest);

    let firstName = "";
    let lastName = "";

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

<div class="mb-6">
    <Label for="first-name" class="block mb-2">First Name</Label>
    <Input bind:value={firstName} id="default-input" placeholder="" />
</div>
<div class="mb-6">
    <Label for="first-name" class="block mb-2">Last Name</Label>
    <Input bind:value={lastName} id="default-input" placeholder="" />
</div>
<Button on:click={ calculate }>Submit</Button>



<p>Total Reservations: { reservationCount }</p>
<p>Total Cancellations: { cancellationCount }</p>




<Table>
    <TableHead>
        <TableHeadCell>Date</TableHeadCell>
        <TableHeadCell>Cancellation Reason</TableHeadCell>'
        <TableHeadCell>Instructor Name</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each cancellationArray as cancellationObject}
            <TableBodyRow>
                <TableBodyCell>{cancellationObject.date}</TableBodyCell>
                <TableBodyCell>{cancellationObject.title}</TableBodyCell>
                <TableBodyCell>{cancellationObject.instructor}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>



