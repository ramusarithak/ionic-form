import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { welcomRoutingModule} from './welcome-routing.module'
import { WelcomeComponent} from './welcome.component' 
import {IonicModule} from '@ionic/angular'
import { from } from 'rxjs';
@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    IonicModule,
    CommonModule,
    welcomRoutingModule
  ],
  entryComponents:[]
})
export class WelcomeModule { }
