import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageMissingComponent } from './page-missing/page-missing.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: '**', component: PageMissingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
