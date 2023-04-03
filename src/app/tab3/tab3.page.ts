import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { CharacterService } from '../character.service';
import { Character } from '../entity/character';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements OnInit{
  constructor(private characterService: CharacterService) {}
  characters:Character[] = [];
  currentPage = 1;
  isFetching:boolean = false;

  ngOnInit() {
    this.generateItems(null);
  }

  private generateItems(ev:any) {
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
        this.characters.push(character);
      }
      this.currentPage += 1;
      this.isFetching = false;

      if (ev != null)
      (ev as InfiniteScrollCustomEvent).target.complete();
    });
  }

  onIonInfinite(ev:any) {
    this.generateItems(ev);
  }
}
