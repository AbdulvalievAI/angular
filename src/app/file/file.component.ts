import {Component, Input, OnInit} from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: [
    './file.component.sass',
    '../../../node_modules/material-icons/iconfont/material-icons.scss'
  ]
})
export class FileComponent implements OnInit {
  @Input() file: File;
  id: uuid;
  createDate: Date;
  thumbnailPath: string | ArrayBuffer;
  path: string | ArrayBuffer;

  constructor() {
    this.id = uuid.v4();
    this.createDate = new Date();
  }

  ngOnInit(): void {
    console.log('FileComponent | constructor | file', this.file);
    const reader = new FileReader();

    reader.readAsDataURL(this.file);
    reader.onload = (event: ProgressEvent) => {
      this.thumbnailPath = (event.target as FileReader).result;
      console.log('this.thumbnailPath 1', this.thumbnailPath);
    };
  }

  /*
  getThumbnail(file: File): string {

  }

  open(): void {

  }

  remove(): void  {

  }
  */
}
