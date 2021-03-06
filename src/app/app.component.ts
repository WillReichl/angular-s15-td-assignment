import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  emailText: string;
  defaultSubscription = 'advanced';
  passwordText: string;

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
