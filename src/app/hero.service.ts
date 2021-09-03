import { Injectable } from '@angular/core';
import{Hero} from './Heromodel';
import{HEROLIST} from './heroeslist';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero():Hero[]{
    return HEROLIST;
  }

  constructor() { }
}
