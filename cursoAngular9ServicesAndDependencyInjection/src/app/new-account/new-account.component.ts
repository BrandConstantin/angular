import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LogginService, private accountService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // create manualy
    /*
    const service = new LogginService();
    service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    */
    // created by Angular
    // this.loggingService.logStatusChange(accountStatus);
  }
}
