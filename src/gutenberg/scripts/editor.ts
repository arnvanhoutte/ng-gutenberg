import * as oEditor from '@wordpress/editor';
import tinymce from 'tinymce';

(<any>window).tinymce = (<any>window).tinymce || tinymce;

const oldEditorFunctions = {
    initialize: (id, settings = { tinymce: true }) => { },
    autop: () => {},
    getContent: id => { },
    remove: id => { },
    removep: () => {},
    getDefaultSettings: () => ({
        tinymce: {
        indent: true,
        keep_styles: false,
        menubar: false,
        plugins: 'charmap,colorpicker,hr,lists,media,paste,tabfocus,textcolor,fullscreen',
        resize: 'vertical',
        skin: 'lightgray',
        theme: 'modern',
        toolbar1: 'bold,italic,bullist,numlist,link',
        },
        quicktags: {
        buttons: 'strong,em,link,ul,ol,li,code',
        },
    }),
};
const editor = {
    ...oEditor,
    ...oldEditorFunctions,
};

const oldEditor = editor;

export {
  editor,
  oldEditor,
};
