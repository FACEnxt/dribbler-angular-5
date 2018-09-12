import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from "./players/players.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { PlaywinnerComponent } from "./playwinner/playwinner.component";

const routes: Routes = [
 { path: '', component: PlayersComponent },
 { path: 'play', component: PlaygroundComponent },
 { path: 'winner', component: PlaywinnerComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
