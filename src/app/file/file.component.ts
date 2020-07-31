import {Component, Input, OnInit} from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: [
    './file.component.sass'
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
    this.getThumbnail(this.file);
  }

  // openBtn
  // downloadBBtn
  // deleteBtn
  getThumbnail(file: File): void {
    console.log(file.type);
    switch (file.type) {
      case 'image/jpeg':
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: ProgressEvent) => {
          this.thumbnailPath = (event.target as FileReader).result;
        };
        break;
      default:
        this.thumbnailPath = 'test';
    }
  }

  open(): void {
    console.log('OPEN()');
  }

  remove(): void  {
    console.log('remove()');
  }

  download(): void {
    console.log('download()');
  }
}
