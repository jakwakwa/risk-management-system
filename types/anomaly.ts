export interface Anomaly {
	identifier: string;
	raw_amount: number;
	normalized_distance: number;
	created_at: {
		value: string;
	};
}
