import apiFetch from '@wordpress/api-fetch';

// Middleware
apiFetch.use(apiFetch.createNonceMiddleware((<any>window).wpApiSettings.nonce));
apiFetch.use(apiFetch.createRootURLMiddleware((<any>window).wpApiSettings.root));
