import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorGuard {
  constructor(private router: Router) {}

  private checkIfUserIsAuthenticated(): boolean {
    const ENCRYPT_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
    if (!ENCRYPT_TOKEN) {
      return false;
    } else {
      return true;
    }
  }
}
