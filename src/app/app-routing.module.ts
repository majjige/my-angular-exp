import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';
import { GitInfoComponent } from './modules/view/git-info/git-info.component';
import { TextboxComponent } from './textbox/textbox.component';
import { PrintMyNameComponent } from './print-my-name/print-my-name.component';
import { ViewModule } from './modules/view/view.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Routes = [
  { path: '', component: TextboxComponent },
  { path: 'gitinfo', component: GitInfoComponent },
  { path: 'date', component: DateComponent },
  { path: 'redirect', redirectTo: '/gitinfo' },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'profile', component: SettingsProfileComponent },
      { path: 'contact', component: SettingsContactComponent }]
  },
  { path: '**', component: PrintMyNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
