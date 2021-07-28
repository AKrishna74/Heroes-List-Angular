import { Component, OnInit } from '@angular/core';
import { Hero } from '../Heromodel';
import{HEROLIST} from '../heroeslist';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero: Hero = {
    id: 1,
    name: "iron man",
    age: 45
  }
heroes=HEROLIST;
  ngOnInit(): void {
  }

}
