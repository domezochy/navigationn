import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router){
    console.log('dahsboard');
  }
  
  logout(){
    const confirmation = confirm("Do you want to log out");
    if(confirmation){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }

}