import { UsuariosModule } from './../../usuarios/usuarios.module';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginRoutes} from './login.routing';
import { UsuariosRoutes } from './../../usuarios/usuarios.routing';
import {SharedModule} from '../../shared/shared.module';
import { ForgotComponent } from '../forgot/forgot.component';
import { LockScreenComponent } from '../lock-screen/lock-screen.component';
import { WithSocialComponent } from './with-social/with-social.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        RouterModule.forChild(UsuariosRoutes),
        UsuariosModule,
        SharedModule
    ],
    declarations: [LoginComponent, ForgotComponent, LockScreenComponent, WithSocialComponent]
})

export class LoginModule {}
