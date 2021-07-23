import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'check balance';
  transactions = [
    {
      _id: '3e24241143144312',
      description: 'A fake description',
      amount: 20,
      transactionType: 'DEBIT',
    },
    {
      _id: '3e24241135444312',
      description: 'A fake description',
      amount: 25,
      transactionType: 'CREDIT',
    },
  ];
}
