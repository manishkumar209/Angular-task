import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private notifier: NotifierService;

  public constructor(notifier: NotifierService) {
    this.notifier = notifier;
  }
}
