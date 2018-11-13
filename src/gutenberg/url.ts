import * as url from '@wordpress/url/build-module';

if ((<any>window).wp.url) {
  const props = Object.keys(url);

  props.forEach(prop => {
    (<any>window).wp.url[prop] = (<any>window).wp.url[prop] || url[prop];
  });
} else {
    (<any>window).wp.url = url;
}
