import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {
  accounts = [
    { name: 'facebook', status: 'inactive' },
    { name: 'gmail', status: 'active' },
    { name: 'twitter', status: 'active' },
  ]
  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }
  changStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
  constructor() { }
}
