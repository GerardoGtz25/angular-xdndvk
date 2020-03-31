import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientService } from './client.service';
import { CharacterItemComponent } from './character-item/character-item.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, CharacterItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ClientService ]
})
export class AppModule { }
