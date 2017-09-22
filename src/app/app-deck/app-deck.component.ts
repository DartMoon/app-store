import { Component, OnInit } from '@angular/core';
import { AppDeckService } from "./app-deck.service";

@Component({
  selector: 'app-app-deck',
  templateUrl: './app-deck.component.html',
  styleUrls: ['./app-deck.component.scss']
})
export class AppDeckComponent implements OnInit {
  apps;
  constructor( service: AppDeckService ) {
    this.apps = service.getApps();
  }

  ngOnInit() {

  }

}


