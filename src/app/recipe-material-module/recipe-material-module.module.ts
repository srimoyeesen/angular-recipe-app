import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
MatCardModule , MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule
  ],
  exports: [
     MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
     MatFormFieldModule, MatInputModule, BrowserAnimationsModule
  ],
  declarations: []
})
export class RecipeMaterialModule { }
