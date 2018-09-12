import { Component, OnInit } from '@angular/core';
import {PlayerClass} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playerservice:PlayerService) { }

  ngOnInit() {
  }

}
