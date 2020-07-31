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
  @Input() selectedFiles: Array<File>;
  id: uuid;
  createDate: Date;
  thumbnail: string;
  path: string;
  isShowProgress: boolean;
  isShowMenu: boolean;
  isShowOpenBtn: boolean;
  isShowDeleteBtn: boolean;
  isShowDownloadBBtn: boolean;

  constructor() {
    this.id = uuid.v4();
    this.createDate = new Date();
    this.showProgress(true);
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
          this.thumbnail = (event.target as FileReader).result.toString();
          this.path = (event.target as FileReader).result.toString();
          console.log(this.path);
          this.showProgress(false);
        };
        break;
      default:
        this.thumbnail = 'test';
    }
  }

  open(): void {
    console.log('OPEN()');
    window.open(this.thumbnail, '_blank');
  }

  delete(): void {
    console.log('delete()');
    const index: number = this.selectedFiles.indexOf(this.file);
    this.selectedFiles.splice(index, 1);
  }

  download(): void {
    console.log('download()');
    this.showProgress(true);
  }

  showProgress(isShow: boolean): void {
    this.isShowProgress = isShow;
  }
}
