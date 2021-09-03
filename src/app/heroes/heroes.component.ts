import { Component, OnInit } from '@angular/core';
import { Hero } from '../Heromodel';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroServices:HeroService) { }
  selected_hero?: Hero; 
  onSelect(herodata:Hero):void{
    this.selected_hero=herodata;
  }
heroes:Hero[]=[];
getheroes(): void {
  this.heroes= this.heroServices.getHero();
}
  ngOnInit(): void {
    this.getheroes();
  }

}
