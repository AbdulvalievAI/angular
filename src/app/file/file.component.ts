import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent implements OnInit {
  @Input() file: File
  createDate: Date;
  thumbnailPath: string | ArrayBuffer;
  constructor() {
    /*this.file = file
    // this.thumbnailPath = file.name
    this.createDate = new Date()
*/
    /*
    var reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }
    */
  }

  ngOnInit(): void {
    console.log('FileComponent | constructor | file', this.file)
    this.createDate = new Date()
    const reader = new FileReader();

    reader.readAsDataURL(this.file);
    reader.onload = (event: ProgressEvent) => {
      this.thumbnailPath = (<FileReader>event.target).result;
      console.log('this.thumbnailPath 1',this.thumbnailPath)
    }










  }
}
