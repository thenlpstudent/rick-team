import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamHeaderComponent } from './team-header.component';

describe('TeamHeaderComponent', () => {
  let component: TeamHeaderComponent;
  let fixture: ComponentFixture<TeamHeaderComponent>;
  const WIDGET_ID = "widget";
  const WIDGET_SKELETON_ID = "widgetLoader";

  let testIfElemIsDefined = (isComponentHidden: boolean, widgetId:string, expectToBeDefined:boolean) => {
    component.setHidden(isComponentHidden);
    fixture.detectChanges();
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const widget = document.querySelector("#" + widgetId);
    if (expectToBeDefined){
      expect(widget).not.toBeNull();
    }else{
      expect(widget).toBeNull();
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("team-header should disappear if hidden attribute is true", ()=>{
      testIfElemIsDefined(true, WIDGET_ID, false);
  });

  it("team-header should be visible if hidden attribute is false", ()=>{
    testIfElemIsDefined(false, WIDGET_ID, true);
  });

  it("team-header loader (skeleton text) should be visible if hidden attribute is true", ()=>{
    testIfElemIsDefined(true, WIDGET_SKELETON_ID, true);
  });

  it("team-header loader (seleteton text) should be hidden if hidden attribute is false", ()=>{
    testIfElemIsDefined(false, WIDGET_SKELETON_ID, false);
  });

  it("team-header loader widget skeleton should have ion-skeleton element as main-child", ()=>{
    component.setHidden(true);
    fixture.detectChanges();
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const widget = document.querySelector("#" + WIDGET_SKELETON_ID);
    const skeleton = widget?.children[0];
    expect(skeleton).toBeTruthy();
    expect(skeleton?.nodeName).toEqual("ION-SKELETON-TEXT");
  });

  it("team-header loader widget skeleton should have ion-card-header as second child", ()=>{
    component.setHidden(true);
    fixture.detectChanges();
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const widget = document.querySelector("#" + WIDGET_SKELETON_ID);
    const cardHeader = widget?.children[1];
    expect(cardHeader).toBeTruthy();
    expect(cardHeader?.nodeName).toEqual("ion-card-header".toUpperCase());
  });


  it("team-header loader widget skeleton child ion-card-header should have two skeleton texts ", ()=>{
    component.setHidden(true);
    fixture.detectChanges();
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const widget = document.querySelector("#" + WIDGET_SKELETON_ID);
    const cardHeader = widget?.children[1];
    const skeletons = cardHeader?.children;
    expect(skeletons).toBeTruthy();
    expect(skeletons?.length).toBe(2);
    if (skeletons != null){
      for (let i = 0; i < skeletons?.length; i++){
        expect(skeletons[i]?.nodeName).toEqual("ION-SKELETON-TEXT");
      }
    }
  });

  it("First element of card should be image to hold team leader's image", ()=>{
   component.setHidden(false);
   fixture.detectChanges();
   const debugElement : DebugElement = fixture.debugElement;
   const document : HTMLElement = debugElement.nativeElement;
   const widget = document.querySelector("#" + WIDGET_ID);
   const image = widget?.children[0];
   expect(image).toBeTruthy();
   expect(image?.nodeName).toEqual("img".toUpperCase());
  });


  it("Team leader's image should have proper alt text, 'Picture of <team leader name>", ()=>{
    component.setHidden(false);
    const teamLeaderNames = ["Morty Smith", "Rick Sanchez"];
    for (let i = 0; i < teamLeaderNames.length; i++){
      const teamLeaderName = teamLeaderNames[i];
      component.setTeamLeader(teamLeaderName);
      fixture.detectChanges();
      const debugElement : DebugElement = fixture.debugElement;
      const document : HTMLElement = debugElement.nativeElement;
      const widget = document.querySelector("#" + WIDGET_ID);
      const image = widget?.children[0];
      const altText = `Picture of ${teamLeaderName}`;
      expect(image?.getAttribute("alt")).toEqual(altText);
    }
  });

  it("Team leader's image should have proper url", ()=>{
    component.setHidden(false);
    const imageUrls = ["https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"];
    for (let i = 0; i < imageUrls.length; i++){
      const imageUrl = imageUrls[i];
      component.setTeamLeaderImage(imageUrl);
      fixture.detectChanges();
      const debugElement : DebugElement = fixture.debugElement;
      const document : HTMLElement = debugElement.nativeElement;
      const widget = document.querySelector("#" + WIDGET_ID);
      const image = widget?.children[0];
      expect(image?.getAttribute("src")).toEqual(imageUrl);
    }
  });

  it("Should have proper team header title", ()=>{
    component.setHidden(false);
    const cardTitles = ["Team 1", "Team alpha"];
    for (let i = 0; i < cardTitles.length; i++){
      const cardTitle = cardTitles[i];
      component.setTeamTitle(cardTitle);
      fixture.detectChanges();
      const debugElement : DebugElement = fixture.debugElement;
      const document : HTMLElement = debugElement.nativeElement;
      const widget = document.querySelector("#" + WIDGET_ID);
      const cardTitleHeader = widget?.querySelector("ion-card-header");
      expect(cardTitleHeader).withContext("Card Title Header is null!").toBeTruthy();

      const cardTitleElem = cardTitleHeader?.querySelector("ion-card-title");
      expect(cardTitleElem).toBeTruthy();
      expect(cardTitleElem?.innerHTML).toEqual(cardTitle);
    }
  });

  it("Should have proper team sub title", ()=>{
    component.setHidden(false);
    fixture.detectChanges();
    const debugElement : DebugElement = fixture.debugElement;
    const document : HTMLElement = debugElement.nativeElement;
    const widget = document.querySelector("#" + WIDGET_ID);
    const cardTitleHeader = widget?.querySelector("ion-card-header");
    expect(cardTitleHeader).withContext("Card Title Header is null!").toBeTruthy();

    const cardSubTitleElem = cardTitleHeader?.querySelector("ion-card-subtitle");
    expect(cardSubTitleElem).toBeTruthy();
    expect(cardSubTitleElem?.innerHTML).toEqual("Your Team");
  });

});
