import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {

  loading= false;
  submitted = true;
  error="";
  public form: FormGroup;
  constructor(private fb: FormBuilder, 
    public router: Router,
  ) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required, CustomValidators.email ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  /**
   * Purpose: Convenience getter for easy access to form fields
   * @returns this.form.controls
   */
  get f() {
    return this.form.controls;
  }
  
  /**
   * Purpose: Performs action after successful validation, and form submission
   * @returns void
   */
  onSubmit(): void {
    console.log("Form submitted for User: "+ this.f.email.value);
  }

 
}
