import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendingMachineService {
  private apiUrl = 'http://localhost:8080/vending-machine';

  constructor(private http: HttpClient) {}

  insertQuarter(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/insert-quarter`);
  }

  ejectQuarter(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/eject-quarter`);
  }

  pushSodaButton(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/push-soda-button`);
  }

  dispenseSoda(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dispense-soda`);
  }

  getSodasRemaining(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/sodas-remaining`);
  }
}
