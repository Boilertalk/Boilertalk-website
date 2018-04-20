import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-page-missing',
  templateUrl: './page-missing.component.html',
  styleUrls: ['./page-missing.component.css']
})
export class PageMissingComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 4000);
  }

}
