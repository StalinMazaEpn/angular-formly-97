import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FORMLY_MODULE_CONFIG, FORMLY_FIELDS_APPEREANCE } from './formly-config';


@NgModule({
  imports: [
      BrowserModule, 
      BrowserAnimationsModule, 
      MaterialModule, 
      FormsModule,
      ReactiveFormsModule,
       FormlyModule.forRoot(FORMLY_MODULE_CONFIG),
    FormlyMaterialModule,
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: FORMLY_FIELDS_APPEREANCE
    }
  ],
})
export class AppModule {}
