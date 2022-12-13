import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from 'src/app/pages/login/login.module';
import { TableComponent } from './pages/table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CdkTableModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TableComponent]

})
export class AppModule { }
