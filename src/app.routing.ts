import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from 'src/app/pages/table/table.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: AppComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
