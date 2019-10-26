import { Component, ChangeDetectionStrategy, OnInit, ElementRef, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';

@Component({
  selector: 'editor-history-redo',
  template: `
    <EditorHistoryRedo #reactNode></EditorHistoryRedo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['react-renderer', './editor.component.scss']
})
export class EditorHistoryRedoComponent extends ReactWrapperComponent<IEditorProps> implements OnInit {
  reactNodeRef: ElementRef
  @ViewChild('reactNode', { static: true }) protected set setReactNodeRef(ref: ElementRef) {
    this.reactNodeRef = ref;
  }

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2) {
    super(elementRef, changeDetectorRef, renderer);
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