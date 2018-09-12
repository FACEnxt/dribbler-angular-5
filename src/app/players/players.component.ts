import { Component, OnInit } from '@angular/core';
import {PlayerClass} from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  private player: PlayerClass = {
    keyCode : 'D',
    name : 'Kobe Bryant',
    color : '#BD10E0'
   };

  constructor() { }

  ngOnInit() {
  }

}
