import { Component } from '@angular/core';
import countries from './countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public countryList: {name: string, code: string}[] = countries;
}
