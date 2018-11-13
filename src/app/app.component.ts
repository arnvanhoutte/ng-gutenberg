import { Component, AfterViewInit } from '@angular/core';
import {editPost} from '../gutenberg/gutenberg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-gutenberg';

  settings = {
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

ngAfterViewInit(): void {
  console.log((<any>window).regeneratorRuntime);
    editPost.initializeEditor('editor', 'page', 1, this.settings, {});
}
}
