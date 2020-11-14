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

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService
      .login(this.credentials)
      .then(() => this.router.navigate(["/dashboard"]))
      .catch(err => console.log(err.message));
  }

  register() {
    this.authService
      .register(this.credentials)
      .then(() => (this.registerInfo = "ACCOUNT CREATED, PLZ LOGIN IN!"))
      .catch(err => console.log(err.message));
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
