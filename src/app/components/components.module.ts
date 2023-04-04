import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [TeamHeaderComponent, SlidesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    TeamHeaderComponent,
    SlidesComponent
  ]
})
export class ComponentsModule { }
