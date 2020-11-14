import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

/**
 * @title Toolbar overview
 */
@Component({
  selector: "login-component",
  templateUrl: "account.component.html",
  styleUrls: ["account.component.css"]
})
export class AccountComponent {
  hide = true;
  page = "login";
  credentials = {
    email: "",
    password: ""
  };

  registerInfo = "";

  login() {
    this.authService.login(this.credentials);
  }

  register() {
    this.authService
      .register(this.credentials)
      .then(() => (this.registerInfo = "ACCOUNT CREATED, PLZ LOGIN IN!"));
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
