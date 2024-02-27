import { API_KEY } from '$env/static/private';

import gql from 'graphql-tag';
import { print } from 'graphql';

import { error } from '@sveltejs/kit';

const query = `query Query($all: Boolean) {
	bookings(all: $all) {
		nodes {
			... on SingleStudentBooking {
				student {
					firstName
					lastName
				}
				instructor {
					firstName
					lastName
				}
				startsAt
				endsAt
				cancellation {
					title
					comment
					id
				}
			}
		}
	}
}`;

export const load = async () => {
    console.log('Load function called in page.server.js');
    try {
        const variables = {
            all: true,
        };

        const response = await fetch('https://api.flightlogger.net/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        let data = await response.json();

        console.log(data);

        return { data };
    } catch (error) {
        console.error(`Error in load function :( ${error}`);
    }
}