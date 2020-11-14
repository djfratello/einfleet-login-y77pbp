import { FormControl } from "@angular/forms";
import { Component } from "@angular/core";

/**
 * @title Toolbar overview
 */
@Component({
  selector: "pwaApp",
  templateUrl: "pwaApp.html",
  styleUrls: ["pwaApp.css"]
})
export class pwaApp {
  hide = true;
  login = false;
  mode = new FormControl("over");
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
