import { Component, OnInit } from '@angular/core';
import {  Hero } from '../hero'
import { HeroService } from '../services/hero.service'

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  _hero={} as Hero;
  heroes:Array<Hero>;

  ngOnInit() {
    this.heroes=this.heroService.getHeroes();

  }
  
  
}
