import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  let getTabPane = () => {
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement; 
    const tab = document.querySelector("ion-tab-bar");
    return tab;
  }

  let testTabLabel = (expectedTabLabel:string, tabIndex:number) => {
    const tab = getTabPane(); 
    const tabChild = tab?.children[tabIndex];
    const tabLabel = tabChild?.querySelector("ion-label");
    expect(tabChild).toBeTruthy();
    expect(tabLabel).toBeTruthy();
    expect(tabLabel?.innerHTML).toEqual(expectedTabLabel);
  }

  let testTabIconName = (expectedIconName:string, tabIndex: number) => {
    const tab = getTabPane(); 
    const tbhaveChild = tab?.children[tabIndex];
    const tabIcon = tbhaveChild?.querySelector("ion-icon");
    expect(tbhaveChild).toBeTruthy();
    expect(tabIcon).toBeTruthy();
    expect(tabIcon?.name).toEqual(expectedIconName);
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('There should only be 3 tabs', () => {
    const tab = getTabPane(); 
    expect(tab).toBeTruthy(); //check if tab is not null 
    expect(tab?.children).toBeTruthy(); //check if there are children
    expect(tab?.children.length).toBe(3);
  }); 

  it("First tab should be named Dashboard", ()=>{
    testTabLabel("Dashboard", 0);
  }); 

  it("First tab should have a stat dashboard icon", () => {
    const iconName = "stats-chart"; 
    testTabIconName(iconName, 0);
  });

  it("Second tab should be named Your Team", () => {
    testTabLabel("Your Team", 1);
  });

  it("Second tab ion icon name should be skull", () => {
    testTabIconName("skull",1);
  });

  it("Third tab should be named Characters", () => {
    testTabLabel("Characters", 2);
  });

  it("Third tab ion icon name should be accessibility", () => {
    testTabIconName("accessibility",2);
  });

});
