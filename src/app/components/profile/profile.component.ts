import { Component } from '@angular/core';
import { Auth } from "../../services/auth.service";
/**
* This class represents the lazy loaded HomeComponent.
*/
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    // styleUrls: ['profile.component.css'],
})
export class ProfileComponent{
    ngOnInit() {
        
    }
    constructor(private auth: Auth) {}

       

}