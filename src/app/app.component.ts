import { Component } from '@angular/core';

declare const dialogo: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codexmaker';


  onClick() {
    dialogo();
  }

}
