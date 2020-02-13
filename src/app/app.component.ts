import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  push() {
    this.httpClient.get('assets/cool-stuff.json').subscribe((stuff) => {
      console.log('stuff: %O', stuff);
    });
  }
}
