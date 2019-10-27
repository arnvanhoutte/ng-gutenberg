import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { AngularReactBrowserModule } from '@angular-react/core';
import { registerCoreBlocks } from '@wordpress/block-library';

import {
  BlockEditorProvider,
  WritingFlow,
  ObserveTyping,
  BlockList,
  BlockEditorKeyboardShortcuts
} from '@wordpress/block-editor';
import { BlockEditorProviderComponent } from './block-editor-provider.component';
import {
  EditorHistoryRedo,
  EditorHistoryUndo,
} from '@wordpress/editor';
import { EditorHistoryUndoComponent } from './editor-history-undo.component';
import { EditorHistoryRedoComponent } from './editor-history-redo.component';
import {
	Button,
	Popover,
	SlotFillProvider,
	DropZoneProvider,
} from '@wordpress/components';

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
export class NgGutenbergModule {

  constructor() {
    registerCoreBlocks();

    registerElement('BlockEditorProvider', () => BlockEditorProvider);
    registerElement('WritingFlow', () => WritingFlow);
    registerElement('ObserveTyping', () => ObserveTyping);
    registerElement('BlockList', () => BlockList);
    registerElement('Popover', () => Popover);
    registerElement('Button', () => Button);
    registerElement('SlotFillProvider', () => SlotFillProvider);
    registerElement('DropZoneProvider', () => DropZoneProvider);
    registerElement('EditorHistoryUndo', () => EditorHistoryUndo);
    registerElement('EditorHistoryRedo', () => EditorHistoryRedo);
    registerElement('BlockEditorKeyboardShortcuts', () => BlockEditorKeyboardShortcuts);
  }
}
