import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directionality } from '@angular/cdk/bidi';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  constructor(private UserService: UserServiceService,private _snackBar:MatSnackBar) {}
  ngOnInit(): void {}

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  };

  formSubmit()
  {
    if(this.user.username=='' || this.user.username==null)
    {
      this._snackBar.open("username is required!!",'',{duration:2000,verticalPosition:'bottom',horizontalPosition:'right'});
    }

    // adduser: user-service
    this.UserService.addUser(this.user).subscribe(
      (data:any)=>{
          console.log(data);
          Swal.fire('Successfully Done!!','User Id is '+ data.id,'success');
      },
      (error)=>{
          console.log(error);
          this._snackBar.open("something went wrong",'',{duration:3000,verticalPosition:'bottom',horizontalPosition:'left'});
      }
    )
  }
}
