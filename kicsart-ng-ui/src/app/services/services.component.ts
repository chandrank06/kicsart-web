import { Component } from '@angular/core';
import { ServicesService } from './services.service';
@Component({
  selector: 'ka-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Array<any> = [];
  constructor(private servicesService: ServicesService) {}
  ngOnInit() {
    this.getServices();
  }
  getServices() {
    this.services = [
      { title: 'Title 1', description: 'this is adescripiton 1' },
      { title: 'Title 2', description: 'this is adescripiton 2' },{ title: 'Title 2', description: 'this is adescripiton 2' }
    ];
    this.servicesService.getAllServices().subscribe((result: any) => {
      this.services = result.services;
    });
  }
}
