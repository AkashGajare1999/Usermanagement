import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../app/Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: string;
  isshowSubmitError: boolean = false;
  userList: any[] = [];
  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
   
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['',[ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      address: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.getAllUsers();
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.isEditMode = true;
        this.loadUserData();
      }
    });
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

  loadUserData() {
    this.userService.getUser(this.userId).subscribe(
      (data: any) => {
        
        this.userForm.patchValue({
          id: data.id,
          firstName: data.FirstName,
          lastName: data.LastName,
          address: data.Address,
          email: data.Email,
          phone: data.Phone
        });
      });
  }

  get fc() {
    return this.userForm.controls;
  }

  onSubmit() {
    
    if (this.userForm.invalid) {
      this.isshowSubmitError = true;
      return;
    }
    const user = {
      FirstName: this.userForm.value.firstName,
      LastName: this.userForm.value.lastName,
      Address: this.userForm.value.address,
      Email: this.userForm.value.email,
      Phone: this.userForm.value.phone,
    }
    if (this.userList !== null) {

      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].Email === this.userForm.value.email) {
          this.toastr.error('User with the same email already exists !');
          return;
        }
      }
    }

    if (this.isEditMode) {
      this.userService.updateUser(this.userId, user).subscribe({
        next: (data: any) => {
          var result = data;
          this.toastr.success('User updated successfuly');
          this.isshowSubmitError = false;
          this.router.navigate(['/User-List']);
        },
        error: (err) => {
          alert(err);
        }
      });
    } else {
      this.userService.AddUser(user).subscribe({
        next: (data) => {
          var result = data;
          this.toastr.success('User added successfuly');
          this.isshowSubmitError = false;
          this.router.navigate(['/User-List']);

        },
        error: (err) => {
          alert(err);
        }
      });
    }

  }

  Back() {
    this.router.navigate(['/User-List']);

  }

  ResetForm() {
    this.isshowSubmitError = false;
    this.userForm.reset();
  }
}


