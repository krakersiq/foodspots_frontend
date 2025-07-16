import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Formular } from './app/formular/formular';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
