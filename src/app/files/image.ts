import { IFile } from "../iFile";
import * as uuid from 'uuid';
class Image implements IFile {
  createDate: Date;
  id: uuid;
  name: String;
  path: String;
  template: Object;
  thumbnailPath: String;
  type: String;

  constructor(path: String) {
    this.id = uuid.v4()
    this.createDate = new Date()
    this.path = path
  }

  open() {

  }

  remove() {

  }

  render() {

  }
}
