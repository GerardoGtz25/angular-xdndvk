import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public characters = [];

  constructor(private client: ClientService) {}

  ngOnInit() {
    this.getLoad();
  }

  private getLoad() {
    const data = {};
    this.client.get().pipe(
      map(response => response)
    ).subscribe(response => {
      this.characters = response.results;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  public clickCharacter(character) {
    console.log(character);
  }
}
