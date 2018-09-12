import { Component, OnInit, HostListener } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  constructor(private playerservice : PlayerService) { }

  ngOnInit() {
  }

  /* Keyboard Event Listener */
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
   // Call Scoring function here
  this.playerservice.scorePlayers(event);
  }

}
