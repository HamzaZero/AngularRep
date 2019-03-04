import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroUpdateComponent } from './hero-update/hero-update.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    HeroAddComponent,
    HeroUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
