import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
