import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-participate-list',
  templateUrl: './participate-list.component.html',
  styleUrls: ['./participate-list.component.css']
})
export class ParticipateListComponent {
  participateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.participateForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      training: ['', Validators.required],
      message: ['']
    });
  }

  get f() {
    return this.participateForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.participateForm.invalid) {
      return;
    }

    // Proceed with form submission logic
    console.log(this.participateForm.value);
  }
}
