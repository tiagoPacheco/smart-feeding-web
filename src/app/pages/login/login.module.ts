import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule  
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
