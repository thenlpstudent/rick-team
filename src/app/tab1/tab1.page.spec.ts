import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1Page, IonicModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Page title should be 'Welcome!'", () => {
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const titleElems = document.querySelectorAll("ion-title");

    for (let i = 0; i < titleElems.length; i++){
      expect(titleElems[i]).toBeTruthy();
      expect(titleElems[i]?.innerHTML).
      withContext(`ion-title in position ${i} is ${titleElems[i].innerHTML} which isn't equal to 'Welcome!'`).toEqual("Welcome!");
    }

  });

  it("team-card dashboard widget should be there", () => {
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const teamCardWidget = document.querySelector("app-team-header");
    expect(teamCardWidget).toBeTruthy();
  });

});
