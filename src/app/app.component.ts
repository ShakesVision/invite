import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgAddToCalendarService,
  ICalendarEvent,
} from '@trademe/ng-add-to-calendar';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '';
  showNikaah: boolean = false;
  public newEvent: ICalendarEvent = {
    title: `Shakeeb's Walima Reception`,
    start: new Date('November 14, 2021 20:00'),
    duration: 240,
    address: 'Sunrise Lawn, Kalamna Road, Kamptee',
    // Event Description (optional)
    description:
      'This is your invitation for the Walima Masnoona of Shakeeb A. 😇',
  };
  
  public googleCalendarEventUrl: SafeUrl =
    this._sanitizer.bypassSecurityTrustUrl(
      this._addToCalendarService.getHrefFor(
        this._addToCalendarService.calendarType.google,
        this.newEvent
      )
    );
  constructor(
    private route: ActivatedRoute,
    private _addToCalendarService: NgAddToCalendarService,
    private _sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.name = params['n'];
      if (params['ni'] === 't') this.showNikaah = true;
    });
  }
}
