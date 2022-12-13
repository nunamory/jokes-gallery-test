import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from 'src/app/pages/login/login.module';
import { TableComponent } from './pages/table/table.component';
import { TableModule } from './pages/table/table.module';
import { jokeDetailsModule } from './components/joke-details.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    TableModule,
    jokeDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TableComponent]

})
export class AppModule { }
