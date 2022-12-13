import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [TableComponent],

})
export class TableModule { }
