import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestsComponent } from './tests.component';
import { CoreModule } from '../../core/core.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FeaturesComponent } from '../../features/features.component';


@NgModule({
    declarations: [
        TestsComponent
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
export class TestsModule { }
