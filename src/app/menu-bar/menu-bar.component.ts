import { Component, OnInit } from '@angular/core';

import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(
    public iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public snackBar: MatSnackBar
  ) {
  const url = sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/Kessel1.svg');
  iconRegistry.addSvgIcon('chauldron', url);
  }

  ngOnInit() {
  }

    placeholder() {
      this.snackBar.open('Coming Soon', 'Done', {
          duration: 3000
        });
    }

}
