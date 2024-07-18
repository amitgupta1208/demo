import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface userlogin{
  email:string,
  password:string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token:string='';
  pattern ='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"'

 user!:FormGroup;
  constructor(private fb:FormBuilder, private route:Router, private http:HttpClient){
    this.user = this.fb.group({
      email:['', [Validators.required, Validators.email]  ],
      password: ['', [Validators.required, this.pattern]]
    })
  }

  onSubmit(){
    this.http.post('https://api.escuelajs.co/api/v1/auth/login', this.user).subscribe((res:any)=>{
      console.log(res)
      this.token = res.access_token;
    })
    console.log(this.user.value)
    this.route.navigateByUrl('/products')
    
  }

}
