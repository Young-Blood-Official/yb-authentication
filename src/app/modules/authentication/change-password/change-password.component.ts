import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  form: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
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
