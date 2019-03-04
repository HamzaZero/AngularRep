import { Component, OnInit } from '@angular/core';
import {  Hero } from '../hero'
import { HeroService } from '../services/hero.service'

import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  constructor(private router:Router,private heroService:HeroService,private activatedRoute:ActivatedRoute) { }

  _hero={} as Hero;
  heroes:Array<Hero>;
  ngOnInit() {
    this.heroes=this.heroService.getHeroes();

  } 

  onClickAdd(){
    if(window.confirm('Are you sure you want to delete this Hero ?'))
    {
      this.heroService.Add(this.heroes,this._hero,this.router);
    }
    else
        return;
    
  }
  
}
