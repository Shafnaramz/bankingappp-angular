import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
transactions=[];
  constructor(private dataservice:DataService) {
    //this.transactions =dataservice.getTransactions();
    dataservice.getTransactions()
    .subscribe((data:any)=>{
      this.transactions =data.transactions;
    })
   }

  ngOnInit(): void {
  }
delete(transaction){
  this.dataservice.deleteTransaction(transaction._id)
  .subscribe((data:any)=>{
    alert(data.message)
    this.getTransactions();
    
  })
}

}
