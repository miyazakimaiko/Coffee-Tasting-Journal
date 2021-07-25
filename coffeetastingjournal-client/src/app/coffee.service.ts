import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coffee } from './coffee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  
  public getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${this.apiServerUrl}/coffee/all`);
  }

  public addCoffee(coffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(`${this.apiServerUrl}/coffee/add`, coffee);
  }

  public updateCoffee(coffee: Coffee): Observable<Coffee> {
    return this.http.put<Coffee>(`${this.apiServerUrl}/coffee/update`, coffee);
  }

  public deleteCoffee(coffeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/coffee/delete/${coffeeId}`);
  }
}
