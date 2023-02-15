import { json } from '@angular-devkit/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// import { EncrserviceService } from '../encrservice.service';
import { PasswordValidator } from './password.validator';
import {PasswordStrengthValidator}from './password-strength.validators'
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  form!: FormGroup;
loading = false;
submitted = true;
userSubject:any
showform:boolean=false
showgrid:boolean=true
namearr:any=[];
exitdata:any=[];
number:any

encrypted:any
// showPassword!: boolean

constructor(
    private formBuilder: FormBuilder,
    // private encr:EncrserviceService
   
) { }

ngOnInit() {
this.submitted=true
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['']
    });
   
    this.getdata()  
}


get f() { return this.form.controls; }

storeddata:any=[]
ids:any
oldval:any
uname : any;
paswd : any;
onSubmit() {
  this.number=(Math.random()*10)+1
  console.log(this.number);
  
   this.ids=Math.trunc(this.number)

  console.log("no",this.number);
  
  this.submitted = true
  if (this.form.invalid) {
    return;
  }
if(this.action=='A')
{
  let dataobj={
    "username":this.form.value.username,
    "pwd":this.form.value.password,
    "id":this.ids
  }
  this.namearr.push(dataobj)
    localStorage.setItem('userobj',JSON.stringify(this.namearr))
    console.log(this.namearr);
    alert("user details added successfully..")
    this.getdata()
   this.showgrid=true;
   this.showform=false
}
else{

this.exitdata=(JSON.parse(localStorage.getItem('userobj')!))
this.exitdata[this.index].username=this.form.value.username

if(this.form.value.password == '' || this.form.value.password == null){

this.exitdata[this.index].pwd=this.paswd

}
else{
  this.exitdata[this.index].pwd=this.form.value.password
}
   this.namearr=this.exitdata
   localStorage.setItem("userobj",JSON.stringify(this.namearr));
   alert("user details updated successfully...")
   this.getdata()
   this.showgrid=true;
   this.showform=false
}
}

getdata()
{  
this.showform=false
this.userSubject=(JSON.parse(localStorage.getItem('userobj')!))
  console.log(this.userSubject);
  
  
}
action:any
id:any
index:any
clickaction(str:any,type:any,i:any)
{

  this.action=type
   this.id=str.id
   this.index=i
   console.log(this.id);
   console.log("index",this.index);
   
   
  if(this.action=='U')
  {

  this.showform=true;
  this.showgrid=false
  this.form.controls['username'].setValue(str.username)
  this.form.controls['password'].setValue(str.pwd)
  this.form.controls['password'].clearValidators();
  this.form.controls['password'].updateValueAndValidity();
  this.exitdata=(JSON.parse(localStorage.getItem('userobj')!))
  this.uname =  this.exitdata[this.index].username;
this.paswd = this.exitdata[this.index].pwd

// this.encrypted =this.encr.set('',this.paswd);
// console.log(this.encrypted);

 this.submitted=false
 console.log(this.uname, this.paswd);
  }
  else{
  
  this.form.controls['password'].
  setValidators([Validators.required,Validators.minLength(8),
    PasswordStrengthValidator
])
  // PasswordValidator.strong
  
    this.showform=true
    this.showgrid=false
    this.submitted=false
    this.form.reset()
  }
 
}
cancel()
{
  this.showform=false
  this.showgrid=true
this.getdata()
this.form.reset()
}


}
function old(val: any, old: any) {
  throw new Error('Function not implemented.');
}

