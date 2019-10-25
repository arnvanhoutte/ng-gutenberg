/* eslint no-cond-assign: off */

import { pages, types, themes, taxonomies, categories, users } from './fake-data';

let medias = [];

export function getPage(type = 'page') {
    return JSON.parse(localStorage.getItem('g-editor-page')) || pages[type];
}

function savePage(data, type = 'page') {
    const item = {
        ...getPage(type),
        ...data,
        content: {
            raw: data.content,
            rendered: data.content.replace(/(<!--.*?-->)/g, ''),
        },
    };
    (<any>window).gutenberg.onSave(item);
    localStorage.setItem('g-editor-page', JSON.stringify(item));
}

function route(pattern, pathname) {
    const res = {};
    const r = pattern.split('/'), l = r.length, p = pathname.split('/');
    let i = 0;
    for (; i < l; i++) {
        if (r[i] === p[i]) {
            continue;
        }
        if (r[i].charAt(0) === '{' && r[i].charAt(r[i].length - 1) === '}' && p[i]) {
            res[r[i].substring(1, r[i].length - 1)] = p[i];
            continue;
        }
        return false;
    }
    if (p[i]) {
        return false;
    }
    return res;
}


export const apiFetch = async options => {
    //console.log(options.path, options);

    let res = {}, rt;
    const { method, path, data } = options;
    const [_path] = path.split('?');

    // Types
    if (route('/wp/v2/types', _path)) {
        res = types;
    }
    else if (rt = route('/wp/v2/types/{type}', _path)) {
        res = types[rt.type];
    }

    // Pages
    else if (route('/wp/v2/pages', _path)) {
        res = [getPage()];
    }
    else if (route('/wp/v2/pages/{id}', _path) || route('/wp/v2/pages/{id}/autosaves', _path)) {
        if ((method === 'POST' || method === 'PUT') && data) {
            savePage(options.data);
        }
        res = getPage();
    }

    // Posts
    else if (rt = route('/wp/v2/posts', _path)) {
        res = [getPage('post')];
    }
    else if (route('/wp/v2/posts/{id}', _path) || route('/wp/v2/posts/{id}/autosaves', _path)) {
        if ((method === 'POST' || method === 'PUT') && data) {
            savePage(options.data, 'post');
        }
        res = getPage('post');
    }

    // Media
    else if (route('/wp/v2/media', _path)) {
        if (method === 'OPTIONS') {
            res = {
                headers: {
                    get(value) {
                        if (value === 'allow') { return ['POST']; }
                    },
                },
            };
        }
        else if (method === 'POST') {
            const file = options.body.get('file');
            res = file ? await upload(options.body, file) : {};
        }
        else {
            // console.log(medias.length);
            res = medias;
        }
    }
    else if (rt = route('/wp/v2/media/{id}', _path)) {
        res = medias[+rt.id - 1];
    }

    // Themes
    else if (route('/wp/v2/themes', _path)) {
        res = themes;
    }

    // Taxonomies
    else if (route('/wp/v2/taxonomies', _path)) {
        res = taxonomies;
    }
    else if (rt = route('/wp/v2/taxonomies/{name}', _path)) {
        res = taxonomies[rt.name];
    }

    // Categories
    else if (route('/wp/v2/categories', _path)) {
        res = categories;
    }

    // Users
    else if (route('/wp/v2/users', _path)) {
        res = users;
    }

    else {
        console.warn('Unmatched route:', method || 'GET', path, data);
    }

    return res;
};

function upload(formData, file) {
    return new Promise(resolve => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                resolve({
                    id: medias.length + 1,
                    title: { raw: '', rendered: '' },
                    caption: { raw: '', rendered: '' },
                    media_type: file.type,
                    mime_type: file.type,
                    source_url: JSON.parse(xhttp.responseText)[0],
                    media_details: {
                        file: '',
                        width: 0,
                        height: 0,
                        image_meta: {}
                    },
                });
            }
        }

        xhttp.open("POST", "/upload-api/blob/arnvanhoutte/blog", true);
        xhttp.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("id_token"));
        xhttp.send(formData);
    });
}
