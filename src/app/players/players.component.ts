import { Component, OnInit, Input } from '@angular/core';
import {PlayerClass} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @Input('firstScreen') firstScreen : any = true;
  constructor(private playerservice:PlayerService) { }

  ngOnInit() {
      this.playerservice.getPlayers();
  }

}
