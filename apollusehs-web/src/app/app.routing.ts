import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { MeuPerfilComponent } from './config/meu-perfil/meu-perfil.component';
import { ChangePasswordComponent } from './config/change-password/change-password.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'meu-perfil', component: MeuPerfilComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'user', component: UserListComponent },
    { path: 'user/new', component: UserFormComponent},
    { path: 'user/:id', component: UserFormComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);