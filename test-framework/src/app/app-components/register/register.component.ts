import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:[null, Validators.required]
    })
  }

}
