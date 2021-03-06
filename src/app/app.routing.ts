import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from "./app.guard";

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [AuthGuard];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);