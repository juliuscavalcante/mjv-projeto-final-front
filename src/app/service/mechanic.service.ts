import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs";
import { Mechanic } from "../model/mechanic";

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Mechanic> {
    return this.http.get<Mechanic>(`${API_CONFIG.baseUrl}/mechanic/${id}`);
  }

  findAll(): Observable<Mechanic[]> {
    return this.http.get<Mechanic[]>(`${API_CONFIG.baseUrl}/mechanic`);
  }

  create(mechanic : Mechanic): Observable<Mechanic[]> {
    return this.http.post<Mechanic[]>(`${API_CONFIG.baseUrl}/mechanic`, mechanic);
  }

  update(mechanic: Mechanic): Observable<Mechanic> {
    return this.http.put<Mechanic>(`${API_CONFIG.baseUrl}/mechanic/${mechanic.id}`, mechanic);
  }

  delete(id: any): Observable<Mechanic> {
    return this.http.delete<Mechanic>(`${API_CONFIG.baseUrl}/mechanic/${id}`);
  }
}