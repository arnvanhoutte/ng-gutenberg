import { Component, AfterViewInit } from '@angular/core';
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
    autosaveInterval: 0,
    canPublish: false,
    canSave: false,
    canAutosave: false,
    mediaLibrary: true,
  };

  // reset localStorage
  localStorage.removeItem('g-editor-page');

  // Disable tips
  data.dispatch('core/nux').disableTips();

  (<any>window)._wpLoadGutenbergEditor = new Promise(function (resolve) {
    domReady(function () {
      editPost.initializeEditor('editor', 'page', 1, settings, {});
    });
});
}
}
