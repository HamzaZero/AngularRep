import { Component, OnInit } from '@angular/core';
import {  Hero } from '../hero'
import { HeroService } from '../services/hero.service'

import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-hero-update',
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.css']
})
export class HeroUpdateComponent implements OnInit {

  constructor(private router:Router,private heroService:HeroService,private activatedRoute:ActivatedRoute) { }
  _hero={} as Hero;
  heroes:Array<Hero>;
  ngOnInit() {
    this.heroes=this.heroService.getHeroes();

    this.activatedRoute.paramMap.subscribe(param =>{
      const id = +param.get('id');
      this._hero = this.heroes.find(hero => hero.id  == id);
    });

  }

}
