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

  findById(id: any): Observable<Driver> {
    return this.http.get<Driver>(`${API_CONFIG.baseUrl}/driver/${id}`);
  }

  findAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${API_CONFIG.baseUrl}/driver`);
  }

  create(driver : Driver): Observable<Driver[]> {
    return this.http.post<Driver[]>(`${API_CONFIG.baseUrl}/driver`, driver);
  }

  update(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${API_CONFIG.baseUrl}/driver/${driver.id}`, driver);
  }

  delete(id: any): Observable<Driver> {
    return this.http.delete<Driver>(`${API_CONFIG.baseUrl}/driver/${id}`);
  }

}