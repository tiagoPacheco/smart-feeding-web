import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/components/login.component';

export const childRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            { path: 'login', loadChildren: './login/login.module#LoginModule' }
        ]
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },            
            { path: 'index', loadChildren: './index/index.module#IndexModule' },            
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
