import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name="";
  acno="";
  pin=""
  pwd="";
  registerForm = this.fb.group({
    name:['',[ Validators.required ]],
    acno :['',[ Validators.required,Validators.minLength(3) ]],
    pwd :['',[ Validators.required ]],
    pin :['',[ Validators.required ]],

  });

  constructor(private dataService:DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(filed){
    return (this.registerForm.get(filed).touched||this.registerForm.get(filed).dirty)&&this.registerForm.get(filed).errors;
  }
  register(){
//     if(this.registerForm.get('name').errors){
// alert("Name is invalid")
//     }
    if(this.registerForm.valid){
   
    
  //const result = this.dataService.register(this.registerForm.value.name,this.registerForm.value.acno, this.registerForm.value.pin,this.registerForm.value.pwd)
// if(result)
 this.dataService.register(this.registerForm.value.name,this.registerForm.value.acno, this.registerForm.value.pin,this.registerForm.value.pwd)
  .subscribe(data=>{
if(data){
  alert("Successfully created account.please login")
    this.router.navigateByUrl("");
  }
},(data)=>{
  alert(data.error.message);
  

})
  
}else{
    alert("Form is Invalid");
    return;
  }

  }
}

