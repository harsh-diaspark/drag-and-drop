import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  blocks = [
    'Block 1',
    'Block 2',
    'Block 3',
    'Block 4',
    'Block a',
    'Block b'
  ];

 

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
    let oldtarget = this.blocks[event.previousIndex];
    this.blocks[event.previousIndex] = this.blocks[event.currentIndex];
    this.blocks[event.currentIndex] = oldtarget;
  }

 
}


