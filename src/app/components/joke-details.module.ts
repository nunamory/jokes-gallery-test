import { NgModule } from '@angular/core';
import { jokeDetailsComponent } from './joke-details.component'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    jokeDetailsComponent
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [jokeDetailsComponent],

})
export class jokeDetailsModule { }
