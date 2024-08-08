import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsService } from './services/accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    AccountsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
