import { useState } from 'react';
import { createContainer } from 'unstated-next';

const _config = {
	siteTitle: 'ReactANT'
}

const _actions = {
	getData: () => new Promise(async resolve => {
		resolve({success: true});
	})
}

const useGlobalState = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [snackMessages, setSnackMessages] = useState([]);

	const globalState = {
		_config,
		_actions,
		error, setError,
		loading, setLoading,
		snackMessages, setSnackMessages,
	}
	console.log('%c~> globalState:', 'color: #0000FF', globalState);
	return globalState;
}

const GlobalState = createContainer(useGlobalState);
export default GlobalState;