import { Component, OnInit } from '@angular/core';
import {  Hero } from '../hero'
import { HeroService } from '../services/hero.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private router:Router,private heroService:HeroService) { }

  _hero={} as Hero;
  heroes:Array<Hero>;

  ngOnInit() {
    this.heroes=this.heroService.getHeroes();
  }
  
  onClickAdd(){
    this.heroService.Add(this.heroes,this._hero,this.router);
  }
}
