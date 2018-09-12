import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import {PlayerService} from './player.service';
import { PlaygroundComponent } from './playground/playground.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
