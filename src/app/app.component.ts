import { Component, ViewChild } from '@angular/core';
import { EditorComponent, IBlock } from './editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gutenberg';
  blocks: IBlock[];
  @ViewChild('editor', { static: true }) protected editor: EditorComponent;

  constructor() {
    var blocks  = localStorage.getItem("blocks");
    if (blocks){
      this.blocks = JSON.parse(blocks);
    }
    else{
      this.blocks = [];
    }
  }
  logBlocks() {
    console.log(this.blocks);
    localStorage.setItem("blocks", JSON.stringify(this.blocks));
  }
}
