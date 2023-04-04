import { Component, OnInit} from '@angular/core';
import { IonicSlides, InfiniteScrollCustomEvent } from '@ionic/angular';
import { CharacterService } from 'src/app/character.service';
import { Character } from 'src/app/entity/character';
import { Tab3Page } from 'src/app/tab3/tab3.page';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})

export class SlidesComponent  implements OnInit {
  private teamLeaderName : string = "Rick Sanchez";
  private teamLeaderImage : string =  '';
  private teamTitle: string = "TEAM A";
  swiperModules = [IonicSlides];
  isFetching:boolean = false;
  currentPage = 1;
  
  constructor(private characterService: CharacterService) { }
  myCharList : Character[] = [];
  ngOnInit() {
    this.generateItems(null);
  }
  getTeamLeaderName():string{
    return this.teamLeaderName;
  }

  getAltText():string{
    return `Picture of ${this.getTeamLeaderName()}`;
  }
  getTeamLeaderImage(charIndex : number){
    this.teamLeaderImage = this.myCharList[charIndex - 1].getImage();
    return this.teamLeaderImage;
  }
  getTeamTitle(){
    return this.teamTitle;
  }
  public generateItems(ev:any) {
    if (this.isFetching)
      return;

    this.isFetching = true;
    this.characterService.getCharacters(this.currentPage)
    .subscribe(data=>{
      const results = data['results'];
      for (let i = 0; i < results.length; i++){
        const row = results[i];
        const name = row["name"];
        const gender = row["gender"];
        const species = row["species"];
        const image = row["image"];

        const character = new Character(name, gender, species, image);
        this.myCharList.push(character);
      }
      this.currentPage += 1;
      this.isFetching = false;

      if (ev != null)
      (ev as InfiniteScrollCustomEvent).target.complete();
    });
  }
}
