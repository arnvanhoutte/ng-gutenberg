import { Component, ViewChild } from '@angular/core';
import { BlockEditorProviderComponent, IBlock } from '../gutenberg/block-editor-provider.component';
import { serialize, parse } from '@wordpress/blocks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gutenberg';
  blocks: IBlock[];
  @ViewChild('editor', { static: true }) protected editor: BlockEditorProviderComponent;

  constructor() {
    var html = localStorage.getItem("html");
    if (html) {
      var json = JSON.parse(html)
      this.blocks = parse(json);
    }
    else {
      this.blocks = [];
    }
  }
  logBlocks() {
    localStorage.setItem("blocks", JSON.stringify(this.blocks));
    var html = serialize(this.blocks)
    localStorage.setItem("html", JSON.stringify(html));
  }
}
