import apiFetch from '@wordpress/api-fetch/build-module';

if ((<any>window).wp.apiFetch) {
  const props = Object.keys(apiFetch);

  props.forEach(prop => {
    (<any>window).wp.apiFetch[prop] = (<any>window).wp.apiFetch[prop] || apiFetch[prop];
  });
} else {
    (<any>window).wp.apiFetch = apiFetch;
}
