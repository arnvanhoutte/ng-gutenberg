import * as data from '@wordpress/data';

const uid = (<any>window).userSettings ? (<any>window).userSettings.uid || 1 : 1;
const storageKey = `WP_DATA_USER_${uid}`;

data.use(data.plugins.persistence, { storageKey });
data.use(data.plugins.controls);
