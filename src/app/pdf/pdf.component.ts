import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {
  constructor() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  }

  selectFilesHandler(files: FileList): void {
    console.log('=> selectFilesHandler');
    if (!files) { return; }
    console.log('===> files', files);
    const file = files[0];
    this.getThumbnail(file).subscribe(value => {
      this.renderPDF(value);
    });
  }

  private renderPDF(data: string | ArrayBuffer): void {
    console.log('=> getPDF');
    pdfjsLib.getDocument(data).promise
      .then(pdf => {
        console.log('===> getDocument OK', pdf);
        // Fetch the first page
        const pageNumber = 1;
        return pdf.getPage(pageNumber);
      })
      .then( page => {
        console.log('=====> Page loaded', page);
        const desiredWidth = 100;
        const viewport = page.getViewport({ scale: 1 });

        // Prepare canvas using PDF page dimensions
        const canvas = document.getElementById('the-canvas');
        // @ts-ignore
        const canvasContext = canvas.getContext('2d');
        // @ts-ignore
        canvas.height = viewport.height;
        // @ts-ignore
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext,
          viewport
        };
        const renderTask = page.render(renderContext);
        return renderTask.promise;
      })
      .then(() => {
        console.log('Page render OK');
      })
      .catch(err => {
        console.log('===> render PDF ERROR');
        console.error(err);
      });
  }

  private getThumbnail(file: File): Observable<string | ArrayBuffer> {
    console.log('=> getThumbnail');
    return new Observable(subscriber => {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          const result = reader.result;
          subscriber.next(result);
          subscriber.complete();
        },
        false
      );
      reader.readAsDataURL(file);
    });
  }
}
