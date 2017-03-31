import { Component } from '@angular/core';
import { Auth } from "./services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  brand= 'Angular-Auth0';
  brandUrl = 'http://temilajumoke.com';

  constructor(private auth: Auth) {}
}
