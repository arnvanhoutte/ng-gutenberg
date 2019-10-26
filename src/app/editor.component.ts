import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, Renderer2, Input, Output } from '@angular/core';
import {
  BlockEditorProvider
} from '@wordpress/block-editor';
import { ReactWrapperComponent } from '@angular-react/core';
import * as apiFetch from '@wordpress/api-fetch';
import { apiFetch as newApi } from '../data/api-fetch'

@Component({
  selector: 'editor',
  exportAs: 'editor',
  template: `
    <BlockEditorProvider
      #reactNode
      [value]="blocks"
      (onChange)="onChange($event)"
    >
    <WritingFlow>
    <ObserveTyping>
      <BlockList ></BlockList>
    </ObserveTyping>
  </WritingFlow>
  </BlockEditorProvider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['react-renderer', './editor.component.scss']
})
export class EditorComponent extends ReactWrapperComponent<IEditorProps> implements OnInit {
  reactNodeRef: ElementRef
  @ViewChild('reactNode', { static: true }) protected set setReactNodeRef(ref: ElementRef) {
    this.reactNodeRef = ref;
    (<BlockEditorProvider>this.reactNodeRef.nativeElement).onInput = (x) => console.log("onInput", x);
    (<BlockEditorProvider>this.reactNodeRef.nativeElement).onChange = (x) => console.log("onChange", x);
  }
  @Input() blocks: IBlock[];
  @Output() blocksChange = new EventEmitter<IBlock[]>();
  updateBlocks: any;
  componentRef: any;

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2) {
    super(elementRef, changeDetectorRef, renderer);
    this.initApiFetch();
    this.updateBlocks = [];
  }

  onChange(x: IBlock[]){
    this.blocks = x;
    this.blocksChange.emit(this.blocks);
  }

  initApiFetch() {
    apiFetch.default.setFetchHandler(newApi)
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