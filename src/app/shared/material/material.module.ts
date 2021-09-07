import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class MaterialModule {}
