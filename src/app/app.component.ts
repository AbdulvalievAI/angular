import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  selectedFiles: Array<File> = [];

  handlerFileInput(files: Array<File>): void {
    console.log('handleFileInput | files', typeof files);
    this.selectedFiles.push(...files);
  }
}
