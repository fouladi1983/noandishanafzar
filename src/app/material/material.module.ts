import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents = [
  MatGridListModule
];

@NgModule({
  imports: [MatGridListModule],
  exports: [MatGridListModule]
})
export class MaterialModule { }
