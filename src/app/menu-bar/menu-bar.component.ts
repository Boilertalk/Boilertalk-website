import { Component, OnInit } from '@angular/core';

import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(
    public iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
  const url = sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/Kessel1.svg');
  iconRegistry.addSvgIcon('chauldron', url);
  }

  ngOnInit() {
  }

}
