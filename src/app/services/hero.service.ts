import { Injectable } from '@angular/core';
import { Hero } from '../hero'
import { HeroesComponent } from '../heroes/heroes.component';
import { Router } from '@angular/router'
import { forEach } from '@angular/router/src/utils/collection';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  getHeroes(){
    return JSON.parse(localStorage.getItem("array"));
  }
  


  Delete(index,heroes:Array<Hero>){
    heroes.splice(index,1);
  }


  Add(heroes:Array<Hero>,_hero={} as Hero,router:Router){
    let hero ={} as Hero;
    hero.id=+_hero.id;
    hero.firstName=_hero.firstName;
    hero.lastName=_hero.lastName;
    console.log(_hero.id+"/"+_hero.firstName+"/"+_hero.lastName);
    heroes.push(hero);
    
    localStorage.setItem('array',JSON.stringify(heroes));
    
    router.navigateByUrl('/home');
  }
  
  Update(heroes:Array<Hero>,hero:Hero,id:number,router:Router){
    let her ={} as Hero;

      console.log(id);
      her.id=+id;
      her.firstName=hero.firstName;
      her.lastName=hero.lastName;
      console.log(her.id+"/"+her.firstName+"/"+her.lastName);
      hero=her;
      //heroes.push(hero);

      localStorage.setItem('array',JSON.stringify(heroes));
    
    router.navigateByUrl('/home');
        
  }



}
