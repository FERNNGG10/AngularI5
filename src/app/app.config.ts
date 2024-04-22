import { ApplicationConfig } from '@angular/core';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { errorhandlerInterceptor, setRouter } from './core/interceptors/errorhandler.interceptor';
const router = new Router();
setRouter(router);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),provideHttpClient(withInterceptors([tokenInterceptor,errorhandlerInterceptor]))]
};
