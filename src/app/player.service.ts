import { Injectable } from '@angular/core';
import { PlayerClass } from './player';
import { PLAYERS,KEYCODES } from './player-stock';

@Injectable()
export class PlayerService {

  private players : PlayerClass[] = PLAYERS;
  private keyCodes : string = KEYCODES;

  constructor() { }

  getPlayers() : PlayerClass[] {
    return this.players ;
  }

  addPlayer(name: string): void {
    /** Random KeyCode **/
    // Clean Key Codes
    this.cleanKeyCodes();
    // Generate random number capped to length of key codes available
    var randomNum = Math.floor(Math.random()*100) % (this.keyCodes.length);
    // Assign the char at random number position
    var newKeyCode = this.keyCodes.charAt(randomNum);
    // Exit without creating a player, if unique keycode not available.
    if(newKeyCode  === '') return;
    var newPlayer = {name:name,keyCode:newKeyCode,color:'#341122'};
    this.players.push(newPlayer);
   }

   cleanKeyCodes(): void{
     var t =this;
     t.players.forEach(function(element){
     t.keyCodes = t.keyCodes.replace(element.keyCode,'');
    });
 }

}
