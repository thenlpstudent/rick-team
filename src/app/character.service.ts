import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './entity/character';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  getCharacters(page:number):Observable<any>{
    const url:string = "https://rickandmortyapi.com/api/character?page="+page;
    console.log("fetching page " + url)
    return this.httpClient.get(url);
  }

}
