import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: 'file-uploader.component.html',
  styleUrls: ['file-uploader.component.css']
})
export class FileUploaderComponent {

  @Output() uploadedFilePath: EventEmitter<string> = new EventEmitter<string>();

  public fileName?: string;

  constructor() {
  }

  public uploadFile(selectedFile: any): void {
    let filesSelected: any, fileSize: number, fileName: string;
    /*if (selectedFile.target && selectedFile.target.files.length) {
      filesSelected = selectedFile.target.files;
      fileName = selectedFile.target.files[0].name;
      fileSize = selectedFile.target.files[0].size;
    } else if (selectedFile.length && (!selectedFile.target || selectedFile.target.files.length)) {
      filesSelected = [selectedFile[0]];
      fileName = filesSelected[0].name;
      fileSize = filesSelected[0].size;
    }
    if (filesSelected && this.validateFile(fileName, fileSize)) {
      this.uploadedFilePath.emit(result.result.url);
    }*/
  }

  public removeFile(): void {
    this.uploadedFilePath.emit();
    this.fileName = '';
  }

}
