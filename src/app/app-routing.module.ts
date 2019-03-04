import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component'
import { HomeComponent } from './home/home.component'
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroUpdateComponent } from './hero-update/hero-update.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'heroes',     component: HeroesComponent,
    children:[
    {path:'add', component:HeroAddComponent},
    {path:'update/:id', component:HeroUpdateComponent},
    ]
  },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
