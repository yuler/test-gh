import {sub, format} from 'date-fns';

/**
 * Get yesterday's date format
 */
export function yeasterday() {
	const date = sub(new Date(), {days: 1});
	return format(date, 'YYYY-MM-DD');
}
