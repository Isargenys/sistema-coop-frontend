import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent {
  accountDetailId!: number;
  accountData: any;
  statusMessage!: any;

  constructor(private accountService: AccountsService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.accountDetailId = this.route.snapshot.params['id'];
  }

  getOrderDetails(id: number) {
    this.accountService.getAccountById(id).subscribe(response => {
      this.accountData = response;
      
      console.log(this.accountData);
    }, error => console.log(error));
  }
}
