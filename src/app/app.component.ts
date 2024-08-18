import { inject } from '@angular/core/testing';
import { LoginComponent } from './modules/authentication/login/login.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  languages: any = { en: 'English', vi: 'Vietnamese' };
  currentLang: string = 'en';

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(Object.keys(this.languages));
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  changeLanguage(e: any) {
    console.log(e);
    this.translateService.use(e.target.value);
    this.currentLang = e.target.value;
  }
}
