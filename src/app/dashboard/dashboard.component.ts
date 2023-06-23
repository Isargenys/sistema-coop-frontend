import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accounts: any;

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.getAccounts();
  }
  
  getAccounts() {
    this.accountService.getAllAccounts().subscribe(response => {
      this.accounts = response;

      console.log(this.accounts);
    });
  }
}
