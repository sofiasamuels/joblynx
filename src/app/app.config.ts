import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'joblynx-66edf',
        appId: '1:1016126591879:web:ebcbadd9190168dc7c3922',
        storageBucket: 'joblynx-66edf.firebasestorage.app',
        apiKey: 'AIzaSyB0S216qkFtIiVabNbfRam8lVIDZzdm1Wc',
        authDomain: 'joblynx-66edf.firebaseapp.com',
        messagingSenderId: '1016126591879',
        measurementId: 'G-J2FJR75PH0',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideVertexAI(() => getVertexAI()),
  ],
};
