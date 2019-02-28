import { Component, OnInit } from '@angular/core';
import {  Hero } from '../hero'
import { HeroService } from '../services/hero.service'

import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private router:Router,private heroService:HeroService,private route:ActivatedRoute) { }

  _hero={} as Hero;
  heroes:Array<Hero>;

  ngOnInit() {
    this.heroes=this.heroService.getHeroes();

    
    this.route.paramMap.subscribe(param =>{
      const id = +param.get('id');
      if(id !==-1){
      this._hero = this.heroes.find(hero => hero.id  == id);
    }
    });

  }
  
  onClickAdd(){
    this.heroService.Add(this.heroes,this._hero,this.router);
  }
  onClickUpdate(id:number,index:number){
    id=5;
  let a = this.heroes.find(x => x.id === id);
   // index=<number>this.route.params['index'];
    console.log(id);
    this.heroService.Update(this.heroes,this._hero,id,this.router,index)

  }
}
