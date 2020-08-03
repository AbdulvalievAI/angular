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
  isShowProgress = true;
  isShowMenu = false;
  isShowOpenBtn = true;
  isShowDeleteBtn = true;
  isShowDownloadBBtn = true;

  constructor() {
    this.id = uuid.v4();
    this.createDate = new Date();
  }

  ngOnInit(): void {
    console.log('FileComponent | constructor | file', this.file);
    this.getThumbnail(this.file);
  }

  getThumbnail(file: File): void {
    console.log(file.type);
    switch (file.type) {
      case 'image/jpeg':
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.thumbnail = (event.target as FileReader).result.toString();
          this.path = (event.target as FileReader).result.toString();
          console.log(this.path);
          this.showProgress(false);
          this.showMenu(true);
        };
        setTimeout(() => reader.readAsDataURL(file), 0);
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
    this.showMenu(false);
  }

  showProgress(isShow: boolean): void {
    this.isShowProgress = isShow;
  }

  showMenu(isShow: boolean): void {
    this.isShowMenu = isShow;
  }
}
