import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.sass']
})
export class FilesListComponent implements OnInit {
  selectedFiles: Array<File> = []

  handleFileInput(selectedFile: File) {
    console.log('FilesListComponent | handleFileInput | files', )
    this.selectedFiles.push(selectedFile)
  }


  ngOnInit(): void {
  }
}
