import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index.component';
import { routing } from './index.routing';
import { IndexService } from './index.service'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing        
    ],
    declarations: [
        IndexComponent
    ],
    providers: [
        IndexService
    ]
})
export class IndexModule { }
