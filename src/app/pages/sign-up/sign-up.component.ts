import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  constructor(private UserService: UserServiceService) {}
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
      alert('user kaha hai???');
    }

    // adduser: user-service
    this.UserService.addUser(this.user).subscribe(
      (data)=>{
          console.log(data);
          alert("Success");
      },
      (error)=>{
          console.log(error);
          alert("Something went wrong");
      }
    )
  }
}
