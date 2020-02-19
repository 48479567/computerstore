import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../../core/http/upload/upload.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  message: string;

  constructor(
    private uploaderService: UploadService
  ) { }

  onPicked(input: HTMLInputElement) {
    console.log(input.files[0]);
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        (msg: string) => {
          input.value = null;
          this.message = msg;
        }
      )
    }
  }

  ngOnInit() {
  }

}
