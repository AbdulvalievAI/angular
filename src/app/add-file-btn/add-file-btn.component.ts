import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-file-btn',
  templateUrl: './add-file-btn.component.html',
  styleUrls: ['./add-file-btn.component.sass']
})
export class AddFileBtnComponent {
  @Output() public changeSelectedFiles: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();

  public onChangeSelectedFiles(files: Array<File>): void {
    this.changeSelectedFiles.emit(files);
  }
}
