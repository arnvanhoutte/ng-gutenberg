import { Component, AfterViewInit } from '@angular/core';

/*import {apiFetch}  from './api-fetch'

(<any>window).wp = {
  apiFetch
};*/
import { data, editPost, domReady } from '@frontkom/gutenberg-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-gutenberg';

ngAfterViewInit(): void {

  const settings = {
    alignWide: true,
    availableTemplates: [],
    allowedBlockTypes: true,
    disableCustomColors: false,
    disablePostFormats: false,
    titlePlaceholder: 'Add title',
    bodyPlaceholder: 'Insert your custom block',
    isRTL: false,
    autosaveInterval: 10,
    canPublish: false,
    canSave: true,
    canAutosave: true,
    mediaLibrary: true,
  };

  // reset localStorage
  localStorage.removeItem('g-editor-page');

  // Disable tips
  data.dispatch('core/nux').disableTips();

      editPost.initializeEditor('editor', 'page', 1, settings, {});
}
}
