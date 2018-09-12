import { Component, OnInit } from '@angular/core';
import {PlayerClass} from '../player';
import {PLAYERS} from '../player-stock';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  private players : PlayerClass[] = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
