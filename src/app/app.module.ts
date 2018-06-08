import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

import {CdkTableModule} from '@angular/cdk/table';

import {MatIconRegistry} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsListComponent } from './components/forms-list/forms-list.component';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { SubmitComponent } from './components/submit/submit.component';
import { AppMaterialModules } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsService } from './forms.service';
import { SubmissionsComponent } from './components/submissions/submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SubmitComponent,
    NavComponent,
    FormsListComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    ReactiveFormsModule,
    CdkTableModule, 
    AppMaterialModules,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
