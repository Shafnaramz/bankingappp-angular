import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
  
    acno :['1001',[ Validators.required,Validators.pattern("^[0-9]*$")  ]],
    pwd :['userone',[ Validators.required ]],
    
  
  }); 


  constructor(private router:Router,
    private dataService:DataService,
    private fb:FormBuilder) { }
    
    getError(filed){
      return (this.loginForm.get(filed).touched||this.loginForm.get(filed).dirty)&&this.loginForm.get(filed).errors;
    }


  ngOnInit(): void {
  }
  login() {
    if(this.loginForm.valid){
     
      
      //const result = this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd)
      this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd)
      .subscribe((data:any)=>{

      
      //if(result){
        if(data){
          console.log(data)
          localStorage.setItem("name",data.name)
        alert("successful login")
        // window.location.href = "userhome.html";
        this.router.navigateByUrl("dashboard")
      
       }
       else{
         alert("invalid credentials")
       }
       },(data)=>{
      
         alert(data.error.message)
       })
         
       }
       else{
alert("form is invalid")
       }
      }
    }
  // 
  // acnoChange(event){
    
  //   //alert(event.target.value)
  //   this.acno =event.target.value; 
  // }
  //  pwdChange(event){
  //   //alert(event.target.value)
  //   this.pwd =event.target.value; 
  // }
  
  
 
   
   
// var acno = parseInt(this.loginForm.value.acno)
// //var acno = parseInt(acno1.value)
// var password = this.loginForm.value.pwd;
// //var password = pwd1.value;
// alert(acno + "," + password)
// try {
//     if (isNaN(acno)) throw "not a valid account number";
//     if (acno.toString().length < 2) throw "not valid";
// }
// catch (err){
//     alert(err)
// }
//  var data = this.dataService.accountDetails;

// if (acno in data) {
//     var pwd = data[acno].password;

//     if (pwd == password) {
        
//     }

//     else {
//         alert("incorrect username or password")
//     }

// }
// else {
//     alert("user doesnot exist")
// }

// }
//     }
    