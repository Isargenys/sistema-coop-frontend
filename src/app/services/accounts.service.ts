import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  urlApi = 'https://localhost:7214/api/';

  constructor(private http: HttpClient) { }

  getAllAccounts() {
    return this.http.get(this.urlApi + 'Accounts');
  }

  getAccountById(id: number) {
    return this.http.get(this.urlApi + 'Accounts/' + id);
  }
}
