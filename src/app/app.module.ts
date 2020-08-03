import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilesListComponent } from './files-list/files-list.component';
import { FileComponent } from './file/file.component';
import { AddFileBtnComponent } from './add-file-btn/add-file-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    FileComponent,
    AddFileBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
