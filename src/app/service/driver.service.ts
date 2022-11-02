import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs";
import { Driver } from "../model/driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${API_CONFIG.baseUrl}/driver`);
  }
}