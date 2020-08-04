import { Component, Input, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { IFile } from './IFile';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass'],
})
export class FileComponent implements OnInit, IFile {
  @Input() private selectedFiles: Array<File>;

  @Input() file: File;
  id: uuid = uuid.v4();
  createDate: Date = new Date();
  thumbnail: string;
  type: string;

  public isShowProgress: boolean = true;
  public isShowMenu: boolean = false;
  public isShowOpenBtn: boolean = true;
  public isShowDeleteBtn: boolean = true;
  public isShowDownloadBBtn: boolean = true;
  public isError: boolean = false;
  public messageError: string = 'Ошибка!';

  ngOnInit(): void {
    console.log('FileComponent | ngOnInit | file');
    this.type = this.getType(this.file);
    this.getThumbnail(this.file, this.type).then((res) => {
      this.thumbnail = res;
      this.showProgress(false);
      this.showMenu(true);
    });
    if (this.file.type !== 'image/png' && this.file.type !== 'image/jpeg') {
      this.isShowOpenBtn = false;
    }
  }

  private getType(file): string {
    let type = file.type;
    if (!file.type) {
      const splitStr = file.name.split('.');
      type = splitStr[splitStr.length - 1];
    }
    return type;
  }

  private async getThumbnail(file: File, type: string): Promise<string> {
    console.log('===> getThumbnail TYPE | FILE', type, file);
    return new Promise((resolve) => {
      switch (type) {
        case 'image/png':
        case 'png':
        case 'image/jpeg':
        case 'jpeg':
        case 'jpg':
        case 'image/bmp':
        case 'bmp':
          const reader = new FileReader();
          reader.addEventListener(
            'load',
            () => {
              console.log('===> render', reader);
              resolve(reader.result.toString());
            },
            false
          );
          reader.readAsDataURL(file);
          break;
        case 'xls':
        case 'xlsx':
        case 'xlt':
        case 'csv':
          resolve('assets/xlsx.png');
          break;
        case 'doc':
        case 'docx':
        case 'dot':
          resolve('assets/word.png');
          break;
        case 'txt':
          break;
        case 'application/pdf':
        case 'pdf':
          resolve('assets/pdf.png');
          break;
        case 'pptx':
        case 'odp':
          break;
        case 'mp3':
        case 'wav':
        case 'flac':
        case 'wma':
        case 'ogg':
          break;
        case 'apk':
          break;
        case 'mp4':
        case 'avi':
        case '3gp':
        case 'wmv':
        case 'mts':
        case 'mov':
        case 'mkv':
          break;
        case 'zip':
        case 'rar':
        case 'tgz':
        case 'tar-gz':
        case 'tar':
          break;
        default:
          resolve('assets/file-question-outline.svg');
      }
    });
  }

  public open(): void {
    window.open(this.thumbnail, '_blank');
  }

  public delete(): void {
    const index: number = this.selectedFiles.indexOf(this.file);
    this.selectedFiles.splice(index, 1);
  }

  public download(): void {
    // TESTS
    this.showMenu(false);
    this.showProgress(true);

    setTimeout(() => {
      this.showProgress(false);
      this.showError(true);
      this.showMenu(true);
    }, 2000);
  }

  private showProgress(isShow: boolean): void {
    this.isShowProgress = isShow;
  }

  private showMenu(isShow: boolean): void {
    this.isShowMenu = isShow;
  }

  private showError(isShow: boolean, messageError?: string): void {
    this.isError = isShow;
    if (messageError) {
      this.messageError = messageError;
    }
  }
}
