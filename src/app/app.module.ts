import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClilistComponent } from './components/clilist/clilist.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TermComponent } from './components/term/term.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewNameComponent } from './components/view-name/view-name.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ClilistComponent,
    HomeComponent,
    ProfileComponent,
    TermComponent,
    UserlistComponent,
    ViewNameComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
