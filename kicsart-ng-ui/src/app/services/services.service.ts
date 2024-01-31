import { Injectable } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { servicesAPIEndpoints } from './constants/services-api-endpoints';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private httpService: HttpService) {}

  getAllServices(): Observable<any> {
    return this.httpService.getRequest(servicesAPIEndpoints.getAllServices, {});
  }
}
