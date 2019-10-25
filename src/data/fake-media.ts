const date = (new Date()).toISOString();

// List of images
export const medias = [];

export function getMedia(id, params = <any>{}) {
    const sizes = <any>{};

    if (params.thumbnail) {
        sizes.thumbnail = {
            source_url: params.thumbnail,
        };
    }

    return {
        id,
        title: { raw: '', rendered: '' },
        caption: { raw: '', rendered: '' },
        date_gmt: date,
        date,
        media_type: params.media_type || 'image',
        mime_type: params.mime_type || 'image/jpeg',
        source_url: params.source_url || `https://i.redd.it/gl89cp19bue21.png`,
        // link: `${window.location.origin}/img${id}.png`,
        media_details: {
            file: '',
            width: 0,
            height: 0,
            image_meta: {},
            sizes,
        },
    };
}

export function createMedia(file) {
    return new Promise(resolve => {
        const reader = new (<any>window).FileReader();
        reader.onload = () => {
            // Create media and add to list
            const img = uploadMedia(medias.length + 1, file.type, reader.result); //getMedia(medias.length + 1, file.type);//, reader.result);
            medias.push(img);
            resolve(img);
        };
        reader.readAsDataURL(file);
    });
}

function uploadMedia(id, type, bytes: string) {

    return {
        id,
        title: { raw: '', rendered: '' },
        caption: { raw: '', rendered: '' },
        date_gmt: date,
        date,
        media_type: type,
        mime_type: type,
        source_url: bytes,
        // link: `${window.location.origin}/img${id}.png`,
        media_details: {
            file: '',
            width: 0,
            height: 0,
            image_meta: {}
        },
    };
}

// Load media (images)
for (let i = 0; i < 3; i++) {
    medias.push(getMedia(i + 1));
}

// Load media (videos)
medias.push(getMedia(5, {
    media_type: 'video',
    mime_type: 'video/mp4',
    source_url: `https://raw.githubusercontent.com/front/g-editor/master/public/video1.mp4`,
    thumbnail: 'https://i.vimeocdn.com/video/570251592_640x360.jpg',
}));

medias.push(getMedia(6, {
    media_type: 'video',
    mime_type: 'video/mp4',
    source_url: `https://raw.githubusercontent.com/front/g-editor/master/public/video2.mp4`,
    thumbnail: 'https://i.vimeocdn.com/video/543433483_640x360.jpg',
}));
