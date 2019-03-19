import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Property} from '../models/Property.model';
import {PropertiesService} from '../services/properties.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  properties: Property[];
  propertiesSubscription: Subscription;

  constructor(private propertiesService: PropertiesService,
              private router: Router) {
  }

  ngOnInit() {
    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (properties: Property[]) => {
        this.properties = properties;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }

}
