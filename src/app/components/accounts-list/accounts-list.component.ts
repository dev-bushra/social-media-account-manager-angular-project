import { Component, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  @Input() id: number = 0;
  @Input() accountAll: { name: string; status: string } = { name: '', status: '' };

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  statusChange(id: number) {
    if(this.accountsService.accounts[id].status === 'active') {
      this.accountsService.changStatus(id, 'inactive')
    } else {
      this.accountsService.changStatus(id, 'active')
    }
  }
}
