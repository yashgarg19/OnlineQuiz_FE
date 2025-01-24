import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  constructor() {}
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
  }
}
