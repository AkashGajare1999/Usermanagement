import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../app/Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[]; // your user data is of type 'any'
  constructor(private userService: UserServiceService, private router: Router) { }
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        
        this.userList = data;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  editUser(userId: any) {
    
    this.router.navigate(['/User-Upsert', userId])
  }

  deleteUser(userId: any) {
    
    this.userService.deleteUser(userId).subscribe({
      next: (data: any) => {
        
        var result = data;
        console.log(result);
        this.ngOnInit();
      },
      error: (err) => {
        alert(err);
      }
    });
  }


  AddUser()
  {
    this.router.navigate(['/User-Upsert'])
  }
}
