import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.sass'],
})
export class FilesListComponent {
  @Input() public selectedFiles: Array<File>;
}
