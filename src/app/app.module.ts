import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CdkListboxModule} from "@angular/cdk/listbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    DragDropModule,
    CdkListboxModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
