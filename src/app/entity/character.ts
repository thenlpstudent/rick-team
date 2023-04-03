export class Character{
  private name:string = "";
  private gender:string = "";
  private species:string = "";
  private imageUrl:string = "";

  constructor(name:string, gender:string, species:string, image:string){
    this.name = name;
    this.gender = gender;
    this.species = species;
    this.imageUrl = image;
  }

  public getName():string{
    return this.name;
  }

  public getGender():string{
    return this.gender;
  }

  public getSpecies():string{
    return this.species;
  }

  public getImage():string{
    return this.imageUrl;
  }


}
