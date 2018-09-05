import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
MatCardModule , MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatDialogModule
  ],
  exports: [
     MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
     MatFormFieldModule, MatInputModule, BrowserAnimationsModule,  MatDialogModule
  ],
  declarations: []
})
export class RecipeMaterialModule { }
