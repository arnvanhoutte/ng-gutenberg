import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { AngularReactBrowserModule } from '@angular-react/core';

import {
  BlockEditorProvider,
  WritingFlow,
  ObserveTyping,
  BlockList,
  BlockEditorKeyboardShortcuts
} from '@wordpress/block-editor';
import { Popover } from "@wordpress/components";
import { registerCoreBlocks } from '@wordpress/block-library';
import { BlockEditorProviderComponent } from '../gutenberg/block-editor-provider.component';
import {
  EditorHistoryRedo,
  EditorHistoryUndo,
} from '@wordpress/editor';
import { EditorHistoryUndoComponent } from './editor-history-undo.component';
import { EditorHistoryRedoComponent } from './editor-history-redo.component';

const components = [
  BlockEditorProviderComponent,
  EditorHistoryUndoComponent,
  EditorHistoryRedoComponent
]

@NgModule({
  declarations: components,
  imports: [
    AngularReactBrowserModule
  ],
  providers: [],
  exports: components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class GutenbergModule {

  constructor() {
    //registerCoreBlocks();

    registerElement('BlockEditorProvider', () => BlockEditorProvider);
    registerElement('WritingFlow', () => WritingFlow);
    registerElement('ObserveTyping', () => ObserveTyping);
    registerElement('BlockList', () => BlockList);
    registerElement('Popover', () => Popover);
    registerElement('EditorHistoryUndo', () => EditorHistoryUndo);
    registerElement('EditorHistoryRedo', () => EditorHistoryRedo);
    registerElement('BlockEditorKeyboardShortcuts', () => BlockEditorKeyboardShortcuts);
  }
}
