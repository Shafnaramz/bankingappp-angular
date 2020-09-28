import { Injectable } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    1001: { name: "user1", acno: 1001, pin: 1234, password: "userone", balance: 30000, transactions:[] },
    1002: { name: "user2", acno: 1002, pin: 1334, password: "usertwo", balance: 40000, transactions:[] },
    1003: { name: "user3", acno: 1003, pin: 1034, password: "userthree", balance: 30000, transactions:[] },
    1004: { name: "user4", acno: 1004, pin: 1834, password: "userfour", balance: 70000, transactions:[] },
    1005: { name: "user5", acno: 1005, pin: 1934, password: "userfive", balance: 20000, transactions:[] },
}
currentUser;

  constructor(private http:HttpClient) { 
    this.getDetails()
  }
  saveDetails(){
    localStorage.setItem("accountDeatails",JSON.stringify(this.accountDetails));
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
  }
}
getTransactions(){
  //return this.accountDetails[this.currentUser.acno].transactions;
  return this.http.get("http://localhost:3000/getTransactions",options);
}
  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails =JSON.parse(localStorage.getItem("accountDetails"))
  }
  if(localStorage.getItem("curentUser")){
    this.currentUser =JSON.parse(localStorage.getItem("currentUser"));
  }
}
  register(name,acno,pin,password){
    const data={
    // if(acno in this.accountDetails){
    //   alert("Account number already exists.please login")
    //   return false;
    // }
    //this.accountDetails[acno]={
      name,
      acno,
      pin,
      password:password,
      balance:0,
      transactions:[]
      
    }
    // this.saveDetails();
    // return true;
    return this.http.post("http://localhost:3000/register",data);
    
  }
  login(acno1,password){
var acno=parseInt(acno1);
// var data=this.accountDetails;
// if(acno in data){
//   var pwd= data[acno].password
 
//   if(pwd==password){
//     this.currentUser=data[acno];
//     this.saveDetails();
//     return true;
//   }
// }
const data={
  acno,
  password
}
return this.http.post("http://localhost:3000/login",data,options);
}

deposit(acno1,pinno,amt){
//var acno = parseInt(acno1);
    //var pin= pinno.value;
   // var amount = parseInt(amt);
    // var data = this.accountDetails;
    // if (acno in data) {
  
    
    //     let mpin = data[acno].pin;
    //     if (pinno == mpin) {
    //         data[acno].balance += amount;
          // alert("account has been credicted")
    //         this.currentUser=data[acno];
    //         alert(data[acno].balance)
    //         data[acno].transactions.push({
    //           amount:amt,
    //           type:'credit'
    //         })
    //         this.saveDetails();
    //         return true;
    //     }
    // }
    const data={
      acno1,
      pinno,
      amt
    };
    return this.http.post("http://localhost:3000/deposit",data,options);
    }
  //}
  
  withdraw(acno1,pinno,amt){
//   var acno = parseInt(acno1);
//     //var pinno = pinno.value;
//     var amount = parseInt(amt);
//     var data = this.accountDetails
//     if (acno in data) {
//         let mpin = data[acno].pin;
//         if(data[acno].balance<parseInt(amt)){
//           return {
//             status:false,
//             message:'Insufficient balance',
//             balance:data[acno].balance
//           }
//         }
        
//        else  if (pinno == mpin) {

//             data[acno].balance -= parseInt(amt);
//             //alert("account has been debited")
//             data[acno].transactions.push({
//               amount:amt,
//               type:'debit'
//             })
//            this.saveDetails();
//             this.currentUser=data[acno];
            
//             return{

//             status:true,
//             message:'account has been debited' ,
//            balance:data[acno].balance
            
           
//             }
//         }
//   }
//   else{
//     return{
//       status:false,
//       message:'Incorrect Account details'
//     }
//   }

//   }
const data={
  acno1,
  pinno,
  amt
};
return this.http.post("http://localhost:3000/withdraw",data,options);
}
 }