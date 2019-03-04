import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service'
import { Hero} from '../hero';
import { ok } from 'assert';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes:Array<Hero>;
  
  
  constructor(private heroService : HeroService) { }
  ngOnInit() {
    this.heroes=this.getHeros();
  }
  getHeros(){
    return this.heroService.getHeroes();
  }

  onClickDelete(index){
    if(window.confirm('Are you sure you want to delete this Hero ?'))
    {
      this.heroService.Delete(index,this.heroes);
    localStorage.setItem('array',JSON.stringify(this.heroes));
    }
    else
        return;
  } 

}
