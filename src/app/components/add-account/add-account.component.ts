import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  addNew(name: string, status: string) {
    this.accountsService.addAccount(name, status)
  }

}
