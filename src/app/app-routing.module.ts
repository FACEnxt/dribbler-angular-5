import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from "./players/players.component";
import { PlaygroundComponent } from "./playground/playground.component";

const routes: Routes = [
 { path: '', component: PlayersComponent },
 { path: 'play', component: PlaygroundComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
