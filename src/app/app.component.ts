import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coopcmdweb';
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    let sidebar = document.getElementById("sidebar") as HTMLElement;
    let content = document.getElementById("main") as HTMLElement;

    content.style.marginLeft = "250px";
    sidebar.style.width = "250px";
  }
}
