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
  id:number;
  i:number;
  ngOnInit() {
    this.heroes=this.heroService.getHeroes();
    
    this.activatedRoute.paramMap.subscribe(param =>{
      this.id = +param.get('id');
      this._hero = this.heroes.find(hero => hero.id  === this.id);
    });
  }
    onClickUpdate(id:number){
      if(window.confirm('Are you sure you want to update the informations of this Hero ?'))
    {
      id=this.id;
      this.heroService.Update(this.heroes,this._hero,id,this.router)
    }
    else
        return;
      
    }

  

}
