import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculateTotalRequest } from './models/calculate-total-request.model';
import { CalculateTotalResponse } from './models/calculate-total-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7030/api';

  constructor(private http: HttpClient) {}

  calculateTotal(request: CalculateTotalRequest): Observable<CalculateTotalResponse> {
    const url = `${this.baseUrl}/Vehicle/calculateTotalCost`;
    return this.http.post<CalculateTotalResponse>(url, request);
  }
}
