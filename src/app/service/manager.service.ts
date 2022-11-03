import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs";
import { Manager } from "../model/manager";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Manager> {
    return this.http.get<Manager>(`${API_CONFIG.baseUrl}/manager/${id}`);
  }

  findAll(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${API_CONFIG.baseUrl}/manager`);
  }

  create(manager : Manager): Observable<Manager[]> {
    return this.http.post<Manager[]>(`${API_CONFIG.baseUrl}/manager`, manager);
  }

  update(manager: Manager): Observable<Manager> {
    return this.http.put<Manager>(`${API_CONFIG.baseUrl}/manager/${manager.id}`, manager);
  }

  delete(id: any): Observable<Manager> {
    return this.http.delete<Manager>(`${API_CONFIG.baseUrl}/manager/${id}`);
  }
}