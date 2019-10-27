import { Component, ChangeDetectionStrategy, OnInit, ElementRef, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ReactWrapperComponent } from '@angular-react/core';

@Component({
  selector: 'editor-history-undo',
  template: `
    <EditorHistoryUndo #reactNode></EditorHistoryUndo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['react-renderer']
})
export class EditorHistoryUndoComponent extends ReactWrapperComponent<any> implements OnInit {
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