import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public snackbar: MatSnackBar,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
          'swift',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Swift_logo (1).svg'));
    iconRegistry.addSvgIcon(
          'typescript',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/download.svg'));
    iconRegistry.addSvgIcon(
          'c_lang',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/c-programming-language-seeklogo.com.svg'));  }

  ngOnInit() {
    setTimeout(() => this.snackbar.open('We do not use any kind of cookies', 'Ok', {
      duration: 100000
    }), 500);
  }

}
