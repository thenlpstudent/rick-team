import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TeamHeaderComponent } from './team-header/team-header.component';



@NgModule({
  declarations: [TeamHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    TeamHeaderComponent
  ]
})
export class ComponentsModule { }
