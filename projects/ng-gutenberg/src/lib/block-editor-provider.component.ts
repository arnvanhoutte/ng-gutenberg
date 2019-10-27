import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, Renderer2, Input, Output } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';
import * as apiFetch from '@wordpress/api-fetch';
import '@wordpress/format-library';
import '@wordpress/editor'; // This shouldn't be necessary

@Component({
  selector: 'block-editor-provider',
  template: `
  <SlotFillProvider>
    <DropZoneProvider>
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
    </DropZoneProvider>
  </SlotFillProvider>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['react-renderer']
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
    this.updateBlocks = [];
  }

  onChange(x: IBlock[]) {
    this.blocks = x;
    this.blocksChange.emit(this.blocks);
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