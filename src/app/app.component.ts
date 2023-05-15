import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  filterText!: string;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formArr: this.fb.array([
        this.fb.group({
          id: ['1'],
          name: ['one'],
        }),
        this.fb.group({
          id: ['2'],
          name: ['two'],
        }),
        this.fb.group({
          id: ['3'],
          name: ['three'],
        }),
      ]),
    });
  }

  get formArr(): FormArray {
    return (<FormArray>this.form.controls['formArr']) as FormArray;
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.name || index;
  }
}
