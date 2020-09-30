import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   depositForm=this.fb.group({
    acno :['',[ Validators.required ]],
    pin :['',[ Validators.required ]],
    amt :['',[ Validators.required ]],
   })
   withdrawForm=this.fb.group({
    acno :['',[ Validators.required ]],
    pin :['',[ Validators.required ]],
    amt :['',[ Validators.required ]],
   })
   name="";
  constructor(public dataService:DataService,
    private fb:FormBuilder) {
      this.name=localStorage.getItem("name")
     }
    // getError(filed){
    //   return (this.depositForm.get(filed).touched||this.depositForm.get(filed).dirty)&&this.depositForm.get(filed).errors;
    // }
    
  ngOnInit(): void {
  }
  

   deposit() {
           // if(this.depositForm.valid){
           
            
          this.dataService.deposit(this.depositForm.value.acno, this.depositForm.value.pin,this.depositForm.value.amt)
          .subscribe((result:any)=>{
           // if(data)
          
        // const result = this.dataService.deposit(this.depositForm.value.acno, this.depositForm.value.pin,this.depositForm.value.amt)
        
        // if(result){
        
          //alert("deposit")
          //alert("account has been credicted")
           // this.router.navigateByUrl("");
          //}
        //   },(data)=>{
        //     alert(data.error.message)
        //   })
        // }
        //   else{
        //     alert("Form is Invalid");
            
        //   }
        
        //   }
        alert(result.message);
        alert(result.balance);
          }, result => {
            alert(result.error.message);
          })
        }
           getError(filed){
             return (this.withdrawForm.get(filed).touched||this.withdrawForm.get(filed).dirty)&&this.withdrawForm.get(filed).errors;
          }
 withdraw() {
  
       // if(this.withdrawForm.valid){
       
        
      this.dataService.withdraw(this.withdrawForm.value.acno, this.withdrawForm.value.pin,this.withdrawForm.value.amt)
    // if(result.status==true){
    .subscribe((result:any)=>{
    
      alert(result.message);
      alert(result.balance);
       
      
      
     // else{
       // alert(result.message);
        //alert(result.balance);
        
      },result => {
        alert(result.error.message)
     })
    
      }
}



   // }
    
   

  