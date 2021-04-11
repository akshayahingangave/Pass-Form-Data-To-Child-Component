import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PassFormdata';

  // <ccf-child-component [parentForm]="parentForm"></ccf-child-component>


  parentForm: FormGroup | undefined;
  constructor(private fb: FormBuilder){}

  ngOninit(){
    this.parentForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    this.parentForm.valueChanges.subscribe(newVal => console.log(newVal))
  }
}