import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { GetOneComponent } from './features/get-one/get-one.component';
import { GetOneCustomComponent } from './features/get-one-custom/get-one-custom.component';
import { GetAllComponent } from './features/get-all/get-all.component';
import { GetAllCustomComponent } from './features/get-all-custom/get-all-custom.component';
import { CreateComponent } from './features/create/create.component';
import { CreateCustomComponent } from './features/create-custom/create-custom.component';
import { DeleteComponent } from './features/delete/delete.component';
import { DeleteCustomComponent } from './features/delete-custom/delete-custom.component';
import { UpdateComponent } from './features/update/update.component';
import { UpdateCustomComponent } from './features/update-custom/update-custom.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { GetArrayComponent } from './features/get-array/get-array.component';
import { PostComponent } from './features/post/post.component';
import { TestsComponent } from './tests/page/tests.component';


const routes: Routes = [
    { path: '',
        component: FeaturesComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: '', component: WelcomeComponent, canActivate: [AuthGuardService]},
            {path: 'create', component: CreateComponent, canActivate: [AuthGuardService]},
            {path: 'create-custom', component: CreateCustomComponent, canActivate: [AuthGuardService]},
            {path: 'delete', component: DeleteComponent, canActivate: [AuthGuardService]},
            {path: 'delete-custom', component: DeleteCustomComponent, canActivate: [AuthGuardService]},
            {path: 'get-all', component: GetAllComponent, canActivate: [AuthGuardService]},
            {path: 'get-all-custom', component: GetAllCustomComponent, canActivate: [AuthGuardService]},
            {path: 'get-array', component: GetArrayComponent, canActivate: [AuthGuardService]},
            {path: 'get-one', component: GetOneComponent, canActivate: [AuthGuardService]},
            {path: 'get-one-custom', component: GetOneCustomComponent, canActivate: [AuthGuardService]},
            {path: 'post', component: PostComponent, canActivate: [AuthGuardService]},
            {path: 'tests', component: TestsComponent, canActivate: [AuthGuardService]},
            {path: 'update', component: UpdateComponent, canActivate: [AuthGuardService]},
            {path: 'update-custom', component: UpdateCustomComponent, canActivate: [AuthGuardService]},
        ]
    },
    { path: 'features', component: FeaturesComponent, canActivate: [AuthGuardService] },
    { path: '**', component: FeaturesComponent, data: { error: 'Not found' }}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
