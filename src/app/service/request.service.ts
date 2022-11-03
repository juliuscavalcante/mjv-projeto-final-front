import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { Request } from "../model/request";

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Request[]> {
        return this.http.get<Request[]>(`${API_CONFIG.baseUrl}/requests`);
    }
}