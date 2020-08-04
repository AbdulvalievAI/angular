import * as uuid from 'uuid';

export interface IFile {
  id: uuid;
  file: File;
  createDate: Date;
  thumbnail: string;
  type: string;
}
