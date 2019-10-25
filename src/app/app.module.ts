import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularReactBrowserModule } from '@angular-react/core';
import {
  BlockEditorProvider,
  WritingFlow,
  ObserveTyping,
  BlockList
} from '@wordpress/block-editor';
import {Popover} from "@wordpress/components";
import { registerCoreBlocks } from '@wordpress/block-library';
import { EditorComponent } from './editor.component';

 
registerCoreBlocks();
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    AngularReactBrowserModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { 

  constructor(){
    registerElement('BlockEditorProvider', () => BlockEditorProvider);
    registerElement('WritingFlow', () => WritingFlow);
    registerElement('ObserveTyping', () => ObserveTyping);
    registerElement('BlockList', () => BlockList);
    registerElement('Popover', () => Popover);
  }
}
