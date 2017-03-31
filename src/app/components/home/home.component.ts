import { Component, OnInit } from '@angular/core';
import { Auth } from "../../services/auth.service";
/**
* This class represents the lazy loaded HomeComponent.
*/
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    // styleUrls: ['home.component.css'],
})
export class HomeComponent {
    constructor(private auth: Auth) {}
}