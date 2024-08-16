import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.f);
    // this.authService.login(this.loginPayload).subscribe((res) => {
    //   console.log(res);
    // });
    // this.router.navigate(["/dashboards/dashboard"]);
  }
}
