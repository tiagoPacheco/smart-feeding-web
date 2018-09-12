import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
