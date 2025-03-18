import { useState, useEffect } from 'react';

interface FetchState<T> {
	data: T | null;
	isLoading: boolean;
	isError: boolean;
}

export const useFetch = <T>(url: string) => {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		isLoading: true,
		isError: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				setState({
					data: result,
					isLoading: false,
					isError: false,
				});
			} catch (error) {
				setState({
					data: null,
					isLoading: false,
					isError: true,
				});
			}
		};

		fetchData();
	}, [url]);

	return state;
};
