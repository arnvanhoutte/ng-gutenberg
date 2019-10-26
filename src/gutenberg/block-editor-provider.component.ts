import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, Renderer2, Input, Output } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import * as apiFetch from '@wordpress/api-fetch';
import { apiFetch as newApi } from '../data/api-fetch'
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';

@Component({
  selector: 'block-editor-provider',
  template: `
    <BlockEditorProvider
      #reactNode
      [value]="blocks"
      (onChange)="onChange($event)"
    >
      <div className="editor-styles-wrapper">
        <BlockEditorKeyboardShortcuts></BlockEditorKeyboardShortcuts>
          <WritingFlow>
            <ObserveTyping>
              <BlockList></BlockList>
            </ObserveTyping>
          </WritingFlow>
      </div>
  </BlockEditorProvider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['react-renderer', './editor.component.scss']
})
export class BlockEditorProviderComponent extends ReactWrapperComponent<IEditorProps> implements OnInit {
  reactNodeRef: ElementRef
  @ViewChild('reactNode', { static: true }) protected set setReactNodeRef(ref: ElementRef) {
    this.reactNodeRef = ref;
  }
  @Input() blocks: IBlock[];
  @Output() blocksChange = new EventEmitter<IBlock[]>();
  updateBlocks: any;

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2) {
    super(elementRef, changeDetectorRef, renderer);
    this.initApiFetch();
    this.updateBlocks = [];
  }

  onChange(x: IBlock[]) {
    this.blocks = x;
    this.blocksChange.emit(this.blocks);
  }

  initApiFetch() {
    apiFetch.default.setFetchHandler(newApi);
    registerCoreBlocks();
  }

  ngOnInit(): void {
  }
}

export interface IEditorProps extends React.HTMLAttributes<HTMLElement> {

}

export interface IBlock {
  attributes: IAttributes;
  clientId: string;
  innerBlocks: any[];
  isValid: boolean;
  name: string;
}

export interface IAttributes {
  content: string;
  dropCap: boolean;
}