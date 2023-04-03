import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    MyFormComponent,
    ListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, CommonModule], // Agrega ReactiveFormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
