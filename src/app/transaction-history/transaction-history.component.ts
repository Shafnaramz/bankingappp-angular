import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
transactions=[];
id = "";
  constructor(private dataService:DataService) {
    this. getTransactions();
  }
    //this.transactions =dataservice.getTransactions();
    getTransactions(){
    this.dataService.getTransactions()
    .subscribe((data:any)=>{
      this.transactions  = data.transactions;
    })
   }
  
  ngOnInit(): void {
  }
  //onDelete($event){
    deleteTransaction($event){
    //alert("Alert from parent: "+$event);
    this.dataService.deleteTransaction($event)
     .subscribe((data:any)=>{
       alert(data.message);
       this.id="";
      this.getTransactions();
      
     })
  }
  onCancel($event){
    this.id="";
  }
// delete(id){
//   this.idToBeDeleted=id;
  // this.dataService.deleteTransaction(id)
  // .subscribe((data:any)=>{
  //   alert(data.message)
  //   this.getTransactions();
    
  // })
  showConfirmationDialog(id){
    this.id=id;
}

}
