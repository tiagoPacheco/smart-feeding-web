import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './components/profile.component';
import { ProfileService } from './profile.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule  
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        ProfileService
    ]
})
export class ProfileModule { }
