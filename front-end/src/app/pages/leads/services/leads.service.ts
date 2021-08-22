import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base-service';
import { environment } from 'src/environments/environment';
import {Lead} from '../models/leads.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService extends BaseService<Lead, number>{
  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/customer`);
  }

}

