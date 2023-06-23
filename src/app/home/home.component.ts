import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  ngOnInit(): void {
  }

  openNav() {
    let sidebar = document.getElementById("sidebar") as HTMLElement;
    let content = document.getElementById("main") as HTMLElement;
    
    content.style.marginLeft = "250px";
    sidebar.style.width = "250px";
  }
}
