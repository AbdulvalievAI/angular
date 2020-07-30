import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: [
    './files-list.component.sass',
    '../../../node_modules/material-icons/iconfont/material-icons.scss'
  ]
})
export class FilesListComponent implements OnInit {
  selectedFiles: Array<File> = [];

  handleFileInput(newSelectedFiles: Array<File>): void {
    console.log('FilesListComponent | handleFileInput | files', newSelectedFiles);
    this.selectedFiles.push(...newSelectedFiles);
  }

  ngOnInit(): void {}
}
