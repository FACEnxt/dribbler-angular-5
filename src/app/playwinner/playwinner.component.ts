import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerClass } from '../player';

@Component({
  selector: 'app-playwinner',
  templateUrl: './playwinner.component.html',
  styleUrls: ['./playwinner.component.css']
})
export class PlaywinnerComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  private winner : PlayerClass;

  ngOnInit() {
    this.winner = JSON.parse(this.route.snapshot.paramMap.get('player'));
    // Remove Local storage
    localStorage.removeItem('players');
  }

}
