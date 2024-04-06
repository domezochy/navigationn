import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}
  
  login(){
    console.log(localStorage.setItem("token", Math.random().toString()));
    this.router.navigate(['dashboard']);
   }

  //console.log("token", token);

}
