import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss'],
})
export class TeamHeaderComponent  implements OnInit {


  private widgetHidden : boolean = true;
  private teamLeaderName : string = "Rick Sanchez";
  private teamLeaderImage : string = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
  private teamTitle: string = "TEAM A";

  constructor() { }

  ngOnInit() {}

  public setHidden(hidden: boolean){
    this.widgetHidden = hidden;
  }

  public isHidden(): boolean{
    return this.widgetHidden;
  }

  setTeamLeader(teamLeaderName: string) {
    this.teamLeaderName = teamLeaderName;
  }

  getTeamLeaderName():string{
    return this.teamLeaderName;
  }

  getAltText():string{
    return `Picture of ${this.getTeamLeaderName()}`;
  }

  setTeamLeaderImage(imageUrl: string) {
    this.teamLeaderImage = imageUrl;
  }

  getTeamLeaderImage(){
    return this.teamLeaderImage;
  }

  setTeamTitle(teamTitle: string) {
    this.teamTitle = teamTitle;
  }

  getTeamTitle(){
    return this.teamTitle;
  }


}
