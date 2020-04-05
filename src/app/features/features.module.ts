import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { GetOneComponent } from './get-one/get-one.component';
import { GetAllComponent } from './get-all/get-all.component';
import { DataListComponent } from './data-list/data-list.component';
import { GetOneCustomComponent } from './get-one-custom/get-one-custom.component';
import { GetAllCustomComponent } from './get-all-custom/get-all-custom.component';
import { CreateComponent } from './create/create.component';
import { CreateCustomComponent } from './create-custom/create-custom.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteCustomComponent } from './delete-custom/delete-custom.component';
import { UpdateComponent } from './update/update.component';
import { UpdateCustomComponent } from './update-custom/update-custom.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { GetArrayComponent } from './get-array/get-array.component';
import { PostComponent } from './post/post.component';


@NgModule({
    declarations: [
        CreateComponent,
        CreateCustomComponent,
        DeleteComponent,
        DeleteCustomComponent,
        DataListComponent,
        FeaturesComponent,
        GetAllComponent,
        GetAllCustomComponent,
        GetArrayComponent,
        GetOneComponent,
        GetOneCustomComponent,
        PostComponent,
        UpdateComponent,
        UpdateCustomComponent,
        WelcomeComponent,
    ],
    imports: [
        CoreModule,
        FormsModule,

        AppRoutingModule
    ],
    entryComponents: [
        FeaturesComponent,
    ],
    providers: [
    ],
    exports: [],
})
export class FeaturesModule { }
