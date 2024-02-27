import { API_KEY } from '$env/static/private';

import { error } from '@sveltejs/kit';

const query = `
query Query($all: Boolean) {
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
}
`;

export const load = async () => {
    try {
        const variables = {
            all: true,
        };

        const response = await fetch('https://api.flightlogger.net/graphql', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        const { responseData } = await response.json();
        return { ...responseData };
    } catch (error) {
        console.error(`Error in load function :( ${error}`);
    }
}