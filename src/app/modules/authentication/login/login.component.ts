import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginPayload: any;
  constructor(private router: Router) {}
  ngOnInit() {}
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.loginPayload = {
      email: this.form.getRawValue().username,
      password: this.form.getRawValue().password,
    };
    console.log('a' + this.form.controls['username'].errors?.['required']);
    console.log(this.form.controls['username'].touched);
    console.log(this.f);
    // this.authService.login(this.loginPayload).subscribe((res) => {
    //   console.log(res);
    // });
    // this.router.navigate(["/dashboards/dashboard"]);
  }
}
