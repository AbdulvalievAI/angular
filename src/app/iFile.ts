import * as uuid from 'uuid';
export interface IFile {
  id: uuid;
  createDate: Date;
  file: File;
  template: Object;
  thumbnailPath: String;
  render();
  open();
  remove();
}
