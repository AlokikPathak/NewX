import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Purpose: Performs action when App Logo is Clicked
   * @returns void
   */
  viewHome(): void {
    console.log("Navigate to home page");
    this.router.navigate(['']);
  }
}
