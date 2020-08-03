import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-file-btn',
  templateUrl: './add-file-btn.component.html',
  styleUrls: ['./add-file-btn.component.sass']
})
export class AddFileBtnComponent {
  @Output() onChangeSelectedFiles = new EventEmitter();
}
