import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs";
import { Engineer } from "../model/engineer";

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Engineer> {
    return this.http.get<Engineer>(`${API_CONFIG.baseUrl}/engineer/${id}`);
  }

  findAll(): Observable<Engineer[]> {
    return this.http.get<Engineer[]>(`${API_CONFIG.baseUrl}/engineer`);
  }

  create(engineer : Engineer): Observable<Engineer[]> {
    return this.http.post<Engineer[]>(`${API_CONFIG.baseUrl}/engineer`, engineer);
  }

  update(engineer: Engineer): Observable<Engineer> {
    return this.http.put<Engineer>(`${API_CONFIG.baseUrl}/engineer/${engineer.id}`, engineer);
  }

  delete(id: any): Observable<Engineer> {
    return this.http.delete<Engineer>(`${API_CONFIG.baseUrl}/engineer/${id}`);
  }

}