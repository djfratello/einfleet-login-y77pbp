import "./polyfills";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./app/material-module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { pwaApp } from "./app/pwaApp";

//Components
import { AccountComponent } from "./app/component/account/account.component";
import { MenuComponent } from "./app/component/menu/menu.component";

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
const firebaseConfig = {
  apiKey: "AIzaSyCgrInZwhW0cOQkEhcU-BQ4Rq9A4fj1Brs",
  authDomain: "sharp-sandbox-271414.firebaseapp.com",
  databaseURL: "https://sharp-sandbox-271414.firebaseio.com",
  projectId: "sharp-sandbox-271414",
  storageBucket: "sharp-sandbox-271414.appspot.com",
  messagingSenderId: "286562936358",
  appId: "1:286562936358:web:c800dc3d6544afe3f1e8e7",
  measurementId: "G-DYVZ5GC95C"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [pwaApp, AccountComponent, MenuComponent],
  bootstrap: [pwaApp],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
