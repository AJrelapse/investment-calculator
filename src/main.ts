import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeIn from '@angular/common/locales/en-IN';


registerLocaleData(localeIn);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'en-IN' } // ✅ Indian format
  ]
});