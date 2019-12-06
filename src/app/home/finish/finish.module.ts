import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  finishRoutingModule} from './finish-routing.module'
// import { from } from 'rxjs';
import { FinishComponent } from './finish.component'

@NgModule({
  declarations: [FinishComponent],
  imports: [
    CommonModule,finishRoutingModule
  ]
})
export class FinishModule { }
