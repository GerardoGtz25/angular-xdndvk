import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {

  @Input() character = {};
  @Output() charecterClicked: EventEmitter<any> = new EventEmitter();

  characterSnapShot = {};

  constructor() {}

  ngOnInit() {
    this.setSnapShot();
  }

  setSnapShot() {
    this.characterSnapShot = JSON.parse(JSON.stringify(this.character));
    // this.characterSnapShot = this.character;
    // this.characterSnapShot = {...this.character};
    // this.characterSnapShot = Object.assign(this.character, {});
  }

  print(character) {
    this.charecterClicked.emit(character);
  }
}