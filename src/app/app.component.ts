import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { environment } from '../environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular2 Reactive Form';
  public registerForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required])
    });

    this.registerForm.valueChanges.subscribe(value => {
      // console.log('Log: ' + JSON.stringify(value));
      console.log('FName: ' + this.registerForm.value.fname);
      console.log('LName: ' + this.registerForm.value.lname);
    });
  }

}
