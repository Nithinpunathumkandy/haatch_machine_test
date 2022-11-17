import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  email:string='abcd@gmail.com';
  password:any='123456';
  formSubmitted:boolean=false;
  wrongCredentials:boolean=false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login()
  {
    this.formSubmitted=true;
    this.wrongCredentials=false;
    if(this.form.value.email&&this.form.value.password)
    {
      if(this.form.value.email==this.email && this.form.value.password==this.password)
        {
          this.wrongCredentials=false;
          window.localStorage.setItem('logged', 'true');
          this._router.navigateByUrl('/notes');
        }
        else{
          this.wrongCredentials=true;
        }
    }
    
  }

}
