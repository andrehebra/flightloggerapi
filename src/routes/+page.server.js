import { API_KEY } from '$env/static/private';

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
}
`;

