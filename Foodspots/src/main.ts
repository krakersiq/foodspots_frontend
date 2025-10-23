import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; 

bootstrapApplication(App, appConfig).catch((err) => console.error(err)); //starte die Anwendung mit App und gebe Fehler in der Konsole aus
